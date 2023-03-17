export class CreateNoteDto {
  id: number;
  name: string;
  author: string;
}

export class UpdateNoteDto {
  name: string;
  author: string;
}