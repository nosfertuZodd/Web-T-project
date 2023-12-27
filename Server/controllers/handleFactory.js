import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';
import APIFeature from '../utils/apiFeatures.js';

export function deleteOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new AppError(`${Model} document with that ${req.params.id} is not found`, 404));
        }

        res.status(204).json({
            status: 'success',
            data: {
                doc
            }
        })
    });
}

export function getAll(Model) {
    return catchAsync(async (req, res, next) => {

        let features = new APIFeature(Model.find(), req.query).filter().sorting().limitFields().paginate();
        let doc = await features.query;

        res.status(200).json({
            status: 'success',
            length: doc.length,
            data: {
                doc
            }
        })
    });
}

export function getOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findById(req.params.id).select('-__v');

        if (!doc) {
            return next(new AppError(`${Model} document with that ${req.params.id} is not found`, 404));
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        })
    });
}

export function createOne(Model) {
    return catchAsync(async (req, res, next) => {

        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        })
    });
}

export function updateOne(Model) {
    return catchAsync(async (req, res, next) => {

        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        });

        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        })
    });
}