import User from '../models/users.js';
import {getAll, getOne, deleteOne, updateOne, createOne} from './handleFactory.js';

export const createYoutuber = createOne(User);
export const getAllUsers = getAll(User);
export const getUser = getOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
export const getClients = (req, res, next) => {
    req.query.role = "client";
    next()
};

export const getYoutubers = (req, res, next) => {
    req.query.role = "youtuber";
    next()
}