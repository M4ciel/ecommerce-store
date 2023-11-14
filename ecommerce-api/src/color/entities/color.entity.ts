import { Category } from 'src/category/entities/category.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';

@Entity()
@Index(['category', 'name', 'deletedAt'], { unique: true })
export class Color extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 50,
    comment: 'Name of the color.',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: 'Color hex value',
  })
  value: string;

  @ManyToOne(() => Category, (category) => category.colors)
  category: Category;

  @OneToMany(() => Product, (product) => product.color)
  products: Product[];
}
