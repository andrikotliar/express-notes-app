import { ExtendedNoteType } from "../types/notes.types"

export const findNote = (id: string, db: ExtendedNoteType[]) : ExtendedNoteType  => {
  return db.find(note => note.id === id);
}