import { Address } from 'src/address/entities/address.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Product } from 'src/product/entities/product.entity';
import { Store } from 'src/store/entities/store.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Stock extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 50,
    comment: 'Name of the size.',
  })
  name: string;

  @Column({
    type: 'int',
    comment: 'Available quantity of products in the stock.',
  })
  availableQuantity: number;

  @Column({
    type: 'int',
    comment: 'Max quantity of products in the stock.',
  })
  maxQuantity: number;

  @ManyToOne(() => Address, (address) => address.stocks)
  stockAddress: Address;

  @ManyToOne(() => Store, (store) => store.stocks)
  store: Store;

  @OneToMany(() => Product, (product) => product.stock)
  products: Product[];
}
