export interface NoteType {
  id: string;
  title: string;
  created: string;
  category: string;
  content: string;
  active: boolean;
}

export interface UpdatedNoteType {
  title?: string;
  created?: string;
  category?: string;
  content?: string;
}