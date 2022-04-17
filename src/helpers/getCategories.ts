import { NoteType } from "../types/notes.types";

export const getCategories = (notes : NoteType[]) : string[] => {
  const categories = notes.map(note => note.category);
  const set = new Set(categories);
  const uniqueCategories = [...set];

  return uniqueCategories;
}