import { Schema, model } from 'mongoose'
import slugify from 'slugify'

const jobSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Job must be post by client']
    },
    title: {
        type: String,
        required: [true, "Job Title must be entered"],
        trim: true,
        minLength: [5, "Job Title must be greater than 4 characters"],
        maxLength: [50, "Job Title must be less than 51 characters"]
    },
    description: {
        type: String,
        trim: true,
        maxLength: [255, 'Job Description must be less than 256 characters'],
        minLength: [20, 'Job Description must be greater than 19 characters'],
        required: [true, "Job Description must be entered"]
    },
    clipLength: {
        type: Number,
        min: [30, "Video clip Lenth must be greater than 30 seconds."],
        max: [180, 'Video Lenth must be less than 180 seconds.'],
        required: [true, 'Video clip Lenth must be provided.'],
    },
    audiancePool: {
        type: Number,
        min: 0,
        required: [true, 'Experience must be entered']
    },
    preferAudience: {
        type: String,
        enum: ['Child', 'Teen', 'Adult', "All"],
        required: [true, 'Audience Preferance must be entered']
    },
    budget: {
        type: Number,
        min: [10, 'Bugdet must be greater than 10$.'],
        required: [true, 'Bugdet must be entered']
    },
    file: {
        type: String,
    },
    totalBids: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['New', 'Progress', 'Done'],
        default: 'New'
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

jobSchema.pre('save', function(next) {
    this.slug = slugify(this.title, {lower: true})
    next()
})

const Job = model('Job', jobSchema)

export default Job;