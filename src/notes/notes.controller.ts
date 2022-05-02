import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note-dto";
import { NotesService } from "./notes.service";

@Controller('notes')
export class NotesController {

  constructor(
    private notesService : NotesService
  ) {}

  @Get()
  getAllNotes() {
    return this.notesService.getAllNotes();
  }

  @Get('/stats')
  getStats() {
    return this.notesService.generateStats();
  }

  @Get(':id')
  getOneNotes(@Param('id') id: number) {
    return this.notesService.getOneNote(Number(id));
  }

  @Post()
  createNote(@Body() note: CreateNoteDto) {
    return this.notesService.createNote(note)
  }

  @Delete(':id')
  removeOneNote(@Param('id') id: number) {
    return this.notesService.removeNote(Number(id));
  }

  @Patch(':id')
  updateNote(@Param('id') id: number, @Body() updatedNote: CreateNoteDto) {
    return this.notesService.updateNote(
      Number(id),
      updatedNote
    );
  }

  @Patch('/archive/:id')
  archiveNote(@Param('id') id: number) {
    return this.notesService.archiveNote(Number(id));
  }
}