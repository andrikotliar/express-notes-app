import { archiveNote } from "../repositories/notes";
import { Request, Response } from "express";

export const archiveNoteService = async (req: Request, res: Response) => {
  try {

    const { id } = req.params;
    await archiveNote(Number(id));

    res.send(`Note with the id ${id} was updated!`);

  } catch(error) {

    res.status(400).send(error);

  }
}