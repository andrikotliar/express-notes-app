import { NoteType } from "../types/notes.types"

export const findNote = (id: string, db: NoteType[]) : NoteType  => {
  return db.find(note => note.id === id);
}