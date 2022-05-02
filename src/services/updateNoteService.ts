import { editNote } from "../repositories/notes";
import { Request, Response } from "express";
import { UpdatedNoteType } from "../types/notes.types";

export const updateNoteService = async (req: Request, res: Response) => {
  const updatedData : UpdatedNoteType = req.body;
  const { id } = req.params;

  await editNote(Number(id), updatedData);

  res.send(`Note with the id ${id} was updated!`);
}