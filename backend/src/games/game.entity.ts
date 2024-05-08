import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'game' })
export class Game {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  title: string;
}
