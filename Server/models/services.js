import { Schema, model } from 'mongoose'
import slugify from 'slugify'

const serviceSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title must be entered"],
        unique: [true, "Title must be unique"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description must be entered"],
        trim: true,
        maxLength: 255,
        minLength: 20
    },
    icon: {
        type: String,
    },
    slug: String
})

serviceSchema.pre('save', function(next) {
    this.slug = slugify(this.title, {lower: true})
    next()
})

const Service = model('Service', serviceSchema)

export default Service;