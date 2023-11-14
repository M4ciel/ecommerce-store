import { DatabaseContent } from 'src/database/entities/database.entity';
import { State } from 'src/state/entities/state.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Country extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 200,
    comment: 'The country name.',
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 3,
    comment: 'The country abbreviation.',
  })
  initials: string;

  @OneToMany(() => State, (state) => state.country)
  states: State[];
}
