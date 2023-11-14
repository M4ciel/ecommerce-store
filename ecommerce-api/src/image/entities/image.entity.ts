import { DatabaseContent } from 'src/database/entities/database.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Image extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 255,
    comment: 'The product image url.',
  })
  url: string;

  @ManyToOne(() => Product, (product) => product.image)
  product: Product;
}
