import { Billboard } from 'src/billboard/entities/billboard.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Product } from 'src/product/entities/product.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Entity()
@Index(['name', 'userId', 'deletedAt'], { unique: true })
export class Store extends DatabaseContent {
  @Column({ type: 'varchar', length: 50, comment: 'Name of the store.' })
  name: string;

  @Column({ type: 'uuid', comment: 'Id of the authenticated user.' })
  userId: string;

  @OneToMany(() => Billboard, (billboard) => billboard.store)
  billboards: Billboard[];

  @OneToMany(() => Product, (product) => product.store)
  products: Product[];

  @OneToMany(() => Stock, (stock) => stock.store)
  stocks: Stock[];
}
