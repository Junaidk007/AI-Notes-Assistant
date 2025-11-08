import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';
import getAPIResponse from '../utils/apiModel.js';
import { Message } from '../models/message.js';
import { v4 as uuidv4 } from "uuid";
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

    res.json(allNotes);
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

    res.json("Note deleted successully!");
}))

// api endpoint for creating new notes or askking note

router.post("/asknotes", wrapAsync(async (req, res) => {
    let body = req.body;
    let response = await getAPIResponse(body);

    let note = new Message({
        title: body.topic,
        message: response,
        shareId: uuidv4()
    });

    await note.save();

    let data = await Message.findOne({shareId: note.shareId})
    console.log(data)
    res.json(data);
}))

export default router;