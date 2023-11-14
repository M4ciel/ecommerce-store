import { Address } from 'src/address/entities/address.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { State } from 'src/state/entities/state.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class City extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 200,
    comment: 'The city name.',
  })
  name: string;

  @ManyToOne(() => State, (state) => state.cities)
  state: State;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];
}
