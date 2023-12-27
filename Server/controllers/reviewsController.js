import Reviews from '../models/reviews.js';
import {createOne, deleteOne, updateOne} from './handleFactory.js';

export const setReviewIds = (req, res, next) => {
    if(!req.body.reviewedBy) req.body.reviewedBy = req.user._id;
    if(!req.body.reviewedTo) req.body.reviewedTo = req.params.id;
    if(!req.body.jobId) req.body.reviewedTo = req.params.jobId;
    next();
}

export const createService = createOne(Reviews);
//export const removeService = deleteOne(Service);
//export const updateService = updateOne(Service);