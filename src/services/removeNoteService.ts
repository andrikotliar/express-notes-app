import { removeNote } from "../repositories/notes";
import { Request, Response } from "express";

export const removeNoteService = (req: Request, res: Response) : void => {
  const { id } = req.params;
  removeNote(id);


  res.send(`Note with the id ${id} was removed from database!`);
}