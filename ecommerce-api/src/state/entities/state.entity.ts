import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class State extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 75,
    comment: 'The state name.',
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 3,
    comment: 'The state abbreviation.',
  })
  initials: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: 'The state area code.',
  })
  areaCode: string;

  @ManyToOne(() => Country, (country) => country.states)
  country: Country;

  @OneToMany(() => City, (city) => city.state)
  cities: City[];
}
