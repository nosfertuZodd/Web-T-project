import { Schema, model } from 'mongoose'
import slugify from 'slugify'

const bidSchema = new Schema({
    jobId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Job',
        required: [true, 'Bid must placed on the job.']
    },
    youtuberId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Bid must placed by the Youtuber.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    coverLetter: {
        type: String,
        trim: true,
        minLength: [50, 'Cover letter must be greater than 50 character.'],
        maxLength: [255, 'Cover letter must be less than 256 character.'],
        required: [true, 'Cover letter must be entered.']
    },
    pricing: {
        type: Number,
        min: [10, 'Bid must be greater than 10$.'],
        max: [5000, 'Bid must be less than 5000$.'],
        required: [true, 'Bid must be entered']
    },
    smapleLinks: [{
        type: String,
    }],
    status: {
        type: String,
        enum: ['Pending', 'Accept', 'Decline'],
        default: 'Pending'
    },
    resume: {
        type: String,
    }
})

const Bid = model('Bid', bidSchema)

export default Bid;