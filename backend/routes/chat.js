import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';
import getAPIResponse from '../utils/apiModel.js';
import { Message } from '../models/message.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post("/test", wrapAsync(async (req, res) => {
    let { message } = req.body;
    console.log(message)
    let response = await getAPIResponse(message);

    let data = new Message({
        title: message,
        message: response
    });

    await data.save();

    res.send(response);
}))

// to get all notes

router.get("/notes", wrapAsync(async (req, res) => {
    let allNotes = await Message.find().sort({ timestamp: -1 });

    res.send(allNotes);
}))

// to get particular notes through id

router.get("/notes/:noteId", wrapAsync(async (req, res) => {
    let { noteId } = req.params;
    let note = await Message.findById(noteId);

    if (!note) {
        res.status(404).send("note does't exits")
    }

    res.send(note)
}))

// to delete the particular note

router.delete("/notes/:noteId", wrapAsync(async (req, res) => {
    let { noteId } = req.params;
    let note = await Message.findByIdAndDelete(noteId);

    res.send("Note deleted successully!");
}))

// api endpoint for creating new notes or askking note

router.post("/asknotes", wrapAsync(async (req, res) => {
    let { topic } = req.body;
    let response = await getAPIResponse(topic);

    let note = new Message({
        title: topic,
        message: response
    });

    await note.save();

    res.json(response);
}))


export default router;