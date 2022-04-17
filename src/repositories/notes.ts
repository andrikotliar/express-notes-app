import notes from "../data/notes.json";
import { NoteType, UpdatedNoteType } from "../types/notes.types";
import { findNote } from "../helpers/findNote";

let db = notes;

export const getAllNotes = () : NoteType[] => db;

export const getOneNote = (id: string) : NoteType => {
  return findNote(id, db);
}

export const addNote = (note: NoteType, unicId: string, created: string) : void => {
  db.push({
    ...note,
    id: unicId,
    created
  });
}

export const removeNote = (id: string) : void => {
  db = db.filter(note => note.id !== id);
}

export const editNote = (id: string, updatedData: UpdatedNoteType) : void => {
  const note = findNote(id, db);
  const updatedParams = Object.keys(updatedData);

  updatedParams.forEach(param => {
    note[param as keyof UpdatedNoteType] = updatedData[param as keyof UpdatedNoteType]
  });
}

export const archiveNote = (id: string) : void => {
  const note = findNote(id, db);
  note.active ?
    note.active = false :
    note.active = true;
}