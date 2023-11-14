import { Billboard } from 'src/billboard/entities/billboard.entity';
import { Color } from 'src/color/entities/color.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Product } from 'src/product/entities/product.entity';
import { Size } from 'src/size/entities/size.entity';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';

@Entity()
@Index(['billboard', 'name', 'deletedAt'], { unique: true })
export class Category extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 50,
    comment: 'The name of the category.',
  })
  name: string;

  @ManyToOne(() => Billboard, (billboard) => billboard.categories)
  billboard: Billboard;

  @OneToMany(() => Size, (size) => size.category)
  sizes: Size[];

  @OneToMany(() => Color, (color) => color.category)
  colors: Color[];

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
