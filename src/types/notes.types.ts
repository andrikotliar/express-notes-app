export interface NoteType {
  title: string;
  category: string;
  content: string;
}

export interface ExtendedNoteType extends NoteType {
  id: number;
  created: string;
  active: boolean;
}

export interface UpdatedNoteType {
  title?: string;
  category?: string;
  content?: string;
}