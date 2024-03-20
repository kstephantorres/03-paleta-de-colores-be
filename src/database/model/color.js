import mongoose, { Schema } from 'mongoose'

const colorSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    hexadecimal:{
        type: String,
        required: true,
        unique: true,
        minLength: 6,
        maxLength: 6
    },
    rgb: {
        type: {
            r: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            },
            g: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            },
            b: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        },
        required: true
    }
})


const Color = mongoose.model('color',colorSchema) //siempre en singular 'producto'

export default Color