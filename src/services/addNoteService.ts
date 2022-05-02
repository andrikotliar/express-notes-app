import { Request, Response } from "express";
import { addNote } from "../repositories/notes";

export const addNoteService = async (req: Request, res: Response) => {
  const newNote = req.body;

  try {
    await addNote(newNote);
    res.send(`Note with the title ${newNote.title} was added to the database!`);
  } catch(error) {
    res.status(400).send(error);
  }

}