import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Notes } from './notes/entities/note.entity';
import { NotesModule } from './notes/note.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'my-notes',
      entities: [Notes],
      synchronize: true,
    }), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
