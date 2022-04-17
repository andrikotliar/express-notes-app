import { archiveNote } from "../repositories/notes";
import { Request, Response } from "express";

export const archiveNoteService = (req: Request, res: Response) : void => {
  try {

    const { id } = req.params;
    archiveNote(id);
    res.send(`Note with the id ${id} was updated!`);

  } catch(error) {

    res.status(404).send('Note not found!');

  }
}