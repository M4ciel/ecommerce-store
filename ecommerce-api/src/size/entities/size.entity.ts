import { Category } from 'src/category/entities/category.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';

@Entity()
@Index(['category', 'name', 'deletedAt'], { unique: true })
export class Size extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 50,
    comment: 'Name of the size.',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: 'Size value',
  })
  value: string;

  @ManyToOne(() => Category, (category) => category.sizes)
  category: Category;

  @OneToMany(() => Product, (product) => product.size)
  products: Product[];
}
