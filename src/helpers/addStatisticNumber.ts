import { NoteType } from "../types/notes.types";

export const addStatisticNumber = (notes: NoteType[], category: string, activeState: boolean) : number => {
  const filteredNotes = notes.filter(
    note => note.active === activeState && note.category === category
  );

  return filteredNotes.length;
}