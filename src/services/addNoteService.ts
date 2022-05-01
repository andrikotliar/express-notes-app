import { Request, Response } from "express";
import { addNote } from "../repositories/notes";
import { getCurrentDate } from "../helpers/getCurrentDate";
import { v4 as uuidv4 } from "uuid";

export const addNoteService = (req: Request, res: Response) : void => {
  const note = req.body;
  const unicId = uuidv4();
  const createdDate = getCurrentDate();

  addNote(note, unicId, createdDate);

  res.send(`Note with the id ${unicId} was added to the database!`);
}