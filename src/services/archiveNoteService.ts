import { archiveNote } from "../repositories/notes";
import { Request, Response } from "express";

export const archiveNoteService = (req: Request, res: Response) : void => {
  const { id } = req.params;

  archiveNote(id);

  res.send(`Note with the id ${id} was updated!`);
}