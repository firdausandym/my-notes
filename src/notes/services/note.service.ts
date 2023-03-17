import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateNoteDto, UpdateNoteDto } from '../dto/create-note.dto';
import { Notes } from '../entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesRepository: Repository<Notes>,
  ){}

  createNote(createNoteDto: CreateNoteDto): Promise<Notes> {
    return this.notesRepository.save(createNoteDto);
  }

  getNotes(): Promise<Notes[]> {
    return this.notesRepository.find();
  }

  getNote(id: number): Promise<Notes> {
    return this.notesRepository.findOneBy({id});
  }

  updateNote(id: number, updateNoteDto: UpdateNoteDto): Promise<Notes> {
    this.notesRepository.update(id, { ...updateNoteDto });
    return this.getNote(id);
  }

  deleteNote(id: number) {
    this.notesRepository.delete(id);
    return `The note has been deleted from the database.`;
  }
}
