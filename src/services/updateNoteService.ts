import { editNote } from "../repositories/notes";
import { Request, Response } from "express";
import { UpdatedNoteType } from "../types/notes.types";

export const updateNoteService = (req: Request, res: Response) : void => {
  const updatedData : UpdatedNoteType = req.body;
  const { id } = req.params;

  editNote(id, updatedData);

  res.send(`Note with the id ${id} was updated!`);
}