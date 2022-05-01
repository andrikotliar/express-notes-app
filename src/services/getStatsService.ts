import { Request, Response } from "express";
import { getAllNotes } from "../repositories/notes";
import { getCategories } from "../helpers/getCategories";
import { addStatisticNumber } from "../helpers/addStatisticNumber";
import { v4 as uuidv4 } from "uuid";

export const getStatsService = (req: Request, res: Response) : void => {
  const notes = getAllNotes();
  const categories = getCategories(notes);
  const stats = [];

  for(let category of categories) {
    const stat = {
      id: uuidv4(),
      category,
      activeNotes: addStatisticNumber(
        notes,
        category,
        true
      ),
      archivedNotes: addStatisticNumber(
        notes,
        category,
        false
      )
    }

    stats.push(stat)
  }

  res.send(stats);
}