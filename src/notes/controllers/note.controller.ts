import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { NotesService } from '../services/note.service';
import { CreateNoteDto, UpdateNoteDto } from '../dto/create-note.dto';
import { Notes } from '../entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('create')
  createNote(@Body() createNoteDto: CreateNoteDto): Promise<Notes> {
    return this.notesService.createNote(createNoteDto);
  }

  @Get('get')
  getNotes(): Promise<Notes[]> {
    return this.notesService.getNotes();
  }

  @Get('get/:id')
  getNote(@Param('id') id: number): Promise<Notes> {
    return this.notesService.getNote(id);
  }

  @Post('update/:id')
  updateNote(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto): Promise<Notes> {
    return this.notesService.updateNote(id, updateNoteDto);
  }

  @Delete('delete/:id')
  deleteNote(@Param('id') id: number) {
    return this.notesService.deleteNote(id);
  }
}
