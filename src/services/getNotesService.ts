import { getAllNotes } from "../repositories/notes";
import { Request, Response } from "express";

export const getAllNotesService = async (req: Request, res: Response) => {
  const notes = await getAllNotes();

  res.send(notes);
}