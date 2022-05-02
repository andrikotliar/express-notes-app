import { getOneNote } from "../repositories/notes";
import { Request, Response } from "express";

export const getOneNoteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const selectedNote = await getOneNote(Number(id));

  if(!selectedNote) {
    res.status(404).send('Note not found!');
    return;
  }

  res.send(selectedNote);
}