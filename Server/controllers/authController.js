import User from '../models/users.js'
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js'
import jwt from 'jsonwebtoken'
import {promisify} from 'util';


const sendJWTToken = (user) => {
    return jwt.sign({
        _id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: '30m'
    })
}

const createSendToken = (res, statusCode, user, msg) => {

    const token = sendJWTToken(user);
    
    const cookieObject = {
        httpOnly: true,
        expires: new Date(Date.now() + 30 * 60 * 1000),
    }
    if (process.env.NODE_ENV == 'production') cookieObject.secure = true;

    res.cookie('jwt', token, cookieObject);
    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        message: msg,
        token,
        data: {
            user
        }
    });

}

export const login = catchAsync(async (req, res, next) => {
    const {email, password, role} = req.body;

     //1-Check Email & Password are not null
    if(!email || !password || !role) {
        return next(new AppError('Please provide valid email and password and select role.'), 400);
    }

    const user = await User.findOne({email, role}).select('+password');
    
    //2-Check that user exists and match the Password
    if(!user || !await user.checkPassword(password, user.password)) {
        return next(new AppError('Please provide valid email and password'), 400);
    }

    createSendToken(res, 200, user, 'User has logged in successfully');
})

export const signUp = catchAsync(async (req, res, next) => {
    let {name, email, password, phone, address, role, dob, country} = req.body;

    if(role !== 'client' || role !== 'youtuber') role = 'client';

    try {
        var new_user = await User.create({name, email, password, phone, address, role, dob, country});
    }catch(e) {
        return res.status(400).json({
            status: 'error',
            message: e.message
        })
    }

    createSendToken(res, 201, new_user, 'User has sign up successfully');
})

export const logout = catchAsync(async (req, res, next) => {
    
    res.cookie('jwt', 'Shaheryar-Rafique' , {
        expiresIn: new Date(Date.now()) + 10 * 1000,
        httpOnly: true
    })

    res.status(200).json({
        status: 'success',
        message: 'Logout successfully'
    })
})

export const protect = catchAsync(async (req, res, next) => {

    let token;
    //Check JWT is present in request
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    else if(req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if(!token) return next(new AppError('Please login to get access to that routes.', 401));

    //Check JWT is valid
    try {
        var foundId = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    } catch (error) {
        return next(new AppError('Please login to get access to that routes.', 401))
    }

    //check user exist in database
    const user = await User.findById(foundId._id);

    if (!user) {
        return next(new AppError("Token belongs to user not found.", 401));
    }

    res.locals.user = user;
    req.user = user;

    next();
})

export const permission = (...roles) => {

    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to access that route.', 401));
        }     
        next();
    }
}