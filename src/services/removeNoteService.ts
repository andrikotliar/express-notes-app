import { removeNote } from "../repositories/notes";
import { Request, Response } from "express";

export const removeNoteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  await removeNote(Number(id));

  res.send(`Note with the id ${id} was removed from database!`);
}