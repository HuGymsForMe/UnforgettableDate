import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        trim: true,
    },
    date : {
        type: String,
        required: true,
        trim: true,
    },
    time : {
        type: String,
        required: true,
        trim: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
    notification : {
        type: Boolean,
        required: true,
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true,
    }
})

export default mongoose.model("Task", taskSchema);