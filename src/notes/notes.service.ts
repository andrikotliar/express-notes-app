import { Injectable, Inject } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { QueryTypes } from "sequelize";
import { CreateNoteDto } from "./dto/create-note-dto";
import { Note } from "./notes.model";

@Injectable()
export class NotesService {
  constructor(
    @Inject('NOTE_REPOSITORY')
    private noteRepository: typeof Note
  ) {}

  async getAllNotes() : Promise<Note[]> {
    const notes = await this.noteRepository.findAll();
    return notes;
  }

  async getOneNote(id: number) : Promise<Note | string> {
    const note = await this.noteRepository.findOne({
      where: {
        id
      }
    });

    if(!note) {
      return 'Note not found';
    }

    return note;
  }

  async createNote(note: {
    title: string,
    content: string,
    category?: string
  }) : Promise<string> {
    try {
      const createdNote = await this.noteRepository.create(note);
      return `Note with the id ${createdNote.id} was added to the database!`;
    } catch (error) {
      return 'Error: ' + error.errors[0].message;
    }
  }

  async removeNote(id: number) : Promise<string> {
    const note = await this.noteRepository.destroy({
      where: {
        id
      }
    })

    if(!note) {
      return 'Note not found!'
    }

    return `Note with the ${id} was removed!`
  }

  async updateNote(id: number, note: CreateNoteDto) : Promise<string> {
    try {
      await this.noteRepository.update(note, {
        where: {
          id
        }
      });

      return `Note with the id ${id} was updated!`;
    } catch(error) {
      return error;
    }

  }

  async archiveNote(id: number) : Promise<string> {
    try {
      await this.noteRepository.update({
          active: Sequelize.literal('NOT active')
      }, {
        where: {
          id
        }
      });

      return `Note with the id ${id} was updated!`
    } catch(error) {
      return error;
    }

  }

  async generateStats() {
    const stats = await this.noteRepository.sequelize.query(
      `
        SELECT category,
        COALESCE(SUM(1) FILTER(WHERE active = true), 0) AS active,
        COALESCE(SUM(1) FILTER(WHERE active = false), 0) AS archived FROM user_notes GROUP BY category;
      `,
      {
        type: QueryTypes.SELECT
      }
    );

    return stats;
  }
}