import mongoose from 'mongoose';
import validator from 'validator';
import slugify from 'slugify'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 25,
        minLength: 5,
        required: [true, 'User must enter a name.']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please enter a valid email address'],
        unique: true,
        lowercase: true,
        required: [true, 'Email must be provided.'],
    },
    password: {
        type: String,
        required: [true, 'Password must be provided.'],
        maxLength: [20, 'Password must be at most 20 characters'],
        minLength: [8, 'Password must be at least 8 characters'],
        select: false,
    },
    confirmPassword: {
        type: String,
        validate: {
            validator: function (value) {
                return value === this.password
            },
            message: 'Password must match the confirm Password'
        }
    },
    photo: {
        type: String,
    },
    role: {
        type: String,
        enum: ['youtuber', "Business owner"],
        required: [true, 'Role must be provided.'],
    },
    active: {
        type: Boolean,
        default: true
    },
    dob: {
        type: Date,
        required: [true, 'DoB must be provided']
    },
    address: {
         type: String,
          trim: true, 
         required: [true, 'Address must be provided']
    },
    country: { 
        type: String,
        trim: true,
        required: [true, 'Country name must be provided']
    },
    phone: {
        type: String,
        required: [true, 'Phone must be provided']
    },
    audiencePool: {
        type: Number,
        min: 0
    },
    prices: {
        basic: { type: Number, min: 0 },
        standard: { type: Number, min: 0 },
        premium: { type: Number, min: 0 },
    },
    description: {
        type: String,
        trim: true,
        maxLength: 50,
        minLength: 5,
        // required: [true, 'Youtuber Description must enter a name.']
    },
    channel: {
        name: { type: String },
        subscriber: { type: Number, min: 100 },
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

userSchema.pre('save', async function (next) {
    
    this.confirmPassword = undefined;
    this.slug = slugify(this.name, { lower: true })

    if(this.role != 'youtuber') {
        this.services = undefined;
        this.prices = undefined;
        this.channel = undefined;
        this.description = undefined;
    }

    if(!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 12);
    
    next();
})

userSchema.methods.checkPassword = async function(candidatePassword, userPassword) {
   return await bcrypt.compare(candidatePassword, userPassword);
}

const userModel = mongoose.model('User', userSchema);
export default  userModel;
