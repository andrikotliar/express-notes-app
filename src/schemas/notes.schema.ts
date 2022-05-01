import { object, string } from "yup";

export const NoteSchema = object({
  title: string().required(),
  category: string().required(),
  content: string().required()
});

export const PatchNoteSchema = object({
  title: string(),
  category: string(),
  content: string()
});