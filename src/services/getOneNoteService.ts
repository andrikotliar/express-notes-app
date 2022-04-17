import { getOneNote } from "../repositories/notes";
import { Request, Response } from "express";

export const getOneNoteService = (req: Request, res: Response) : void => {
  const { id } = req.params;
  const selectedNote = getOneNote(id);

  res.send(selectedNote);
}