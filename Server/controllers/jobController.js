import JobModel from '../models/job.js';
import {getAll, getOne, createOne, deleteOne, updateOne} from './handleFactory.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

// export const getAllJobs = getAll(JobModel)
export const getJob = getOne(JobModel);
export const createJob = createOne(JobModel);
export const removeJob = deleteOne(JobModel);
export const updateJob = updateOne(JobModel);

export const getAllJobs = catchAsync(async (req, res, next)=> {
    const myJobs = await JobModel.find().populate('userId');

    if(!myJobs) {
        res.status(200).json({
            status: 'success',
            length: myJobs.length,
            message: "No "
        })
    }

    res.status(200).json({
        status: 'success',
        length: myJobs.length,
        data: {
            myJobs
        }
    })
})

export const getMyJobs = catchAsync(async (req, res, next)=> {
    const myJobs = await JobModel.find({userId: req.params.id}).populate('userId');

    if(!myJobs) {
        res.status(200).json({
            status: 'success',
            length: myJobs.length,
            message: "You have not posted any job yet"
        })
    }

    res.status(200).json({
        status: 'success',
        length: myJobs.length,
        data: {
            myJobs
        }
    })
})