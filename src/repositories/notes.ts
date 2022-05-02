import { UpdatedNoteType } from "../types/notes.types";
import Note from "../models/notes.model";
import { Sequelize } from "sequelize";

export const getAllNotes = async () : Promise<Note[]> => {
  const notes = await Note.findAll();
  return notes;
};

export const getOneNote = async (id: number) : Promise<Note> => {
  const note = await Note.findOne({
    where: {
      id
    }
  });

  return note;
}

export const addNote = async (note: Note) : Promise<void> => {
  await Note.create(note);
}

export const removeNote = async (id: number) : Promise<void> => {
  await Note.destroy({
    where: {
      id
    }
  });
}

export const editNote = async (id: number, updatedData: UpdatedNoteType) => {
  await Note.update(updatedData, {
    where: {
      id
    }
  });
}

export const archiveNote = async (id: number) => {
  await Note.update({
    active: Sequelize.literal('NOT active')
  }, {
    where: {
      id
    }
  });
}