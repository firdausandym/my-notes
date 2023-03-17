import { Module } from '@nestjs/common';
import { NotesService } from './services/note.service';
import { NotesController } from './controllers/note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notes])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
