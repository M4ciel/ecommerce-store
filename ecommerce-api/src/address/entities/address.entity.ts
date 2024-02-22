import { City } from 'src/city/entities/city.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';

@Entity()
@Index(['address', 'zipCode', 'district'])
export class Address extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 70,
    comment: 'The address name.',
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 9,
    comment: 'The Zip Code of the address.',
  })
  zipCode: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: 'The district of the address.',
  })
  district: string;

  @ManyToOne(() => City, (city) => city.addresses)
  city: City;

  @OneToMany(() => Stock, (stock) => stock.stockAddress)
  stocks: Stock[];
}
