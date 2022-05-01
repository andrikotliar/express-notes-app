import { getOneNote } from "../repositories/notes";
import { Request, Response } from "express";

export const getOneNoteService = (req: Request, res: Response) : void => {
  const { id } = req.params;
  const selectedNote = getOneNote(id);

  if(!selectedNote) {
    res.status(404).send('Note not found!');
    return;
  }

  res.send(selectedNote);
}