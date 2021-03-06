import { editNote } from "../repositories/notes";
import { Request, Response } from "express";
import { UpdatedNoteType } from "../types/notes.types";

export const updateNoteService = (req: Request, res: Response) : void => {
  try {
    const updatedData : UpdatedNoteType = req.body;
    const { id } = req.params;

    editNote(id, updatedData);

    res.send(`Note with the id ${id} was updated!`);
  } catch (error) {
    res.status(404).send('Note not found!');
  }
}