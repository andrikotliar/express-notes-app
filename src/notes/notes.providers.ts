import { Note } from "./notes.model";

export const notesProviders = [
  {
    provide: "NOTE_REPOSITORY",
    useValue: Note
  }
];