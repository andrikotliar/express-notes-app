import { getAllNotes } from "../repositories/notes";
import { Request, Response } from "express";

export const getAllNotesService = (req: Request, res: Response) : void => {
  const notes = getAllNotes();

  res.send(notes);
}