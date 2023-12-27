import { Schema, model } from 'mongoose'

const reviewSchema = Schema({

    review: {
        type: String,
        trim: true,
        maxLength: [100, 'Review cannot be greater than 100 characters.']
    },
    rating: {
        type: Number,
        max: [5, 'Review cannot be greater than 5.'],
        min: [1, 'Review cannot be less than 1.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    reviewedBy: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Reviewer must be provided.']
    },
    reviewedTo: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Reviewed must be provided.']
    },
    jobId: {
        type: Schema.ObjectId,
        ref: 'Job',
        required: [true, 'Reviewed must be provided.']
    }
});

const Review = model('Review', reviewSchema)
export default Review;