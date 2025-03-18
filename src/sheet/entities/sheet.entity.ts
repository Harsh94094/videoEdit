import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class SheetData {
  @ObjectIdColumn() // Required for MongoDB
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column({ nullable: true, type: 'text' })  
  imageUrl: string | null;
}
