import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    title: String,
    message: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model("Message", messageSchema);

export {Message, messageSchema};