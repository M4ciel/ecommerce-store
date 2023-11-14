import { Category } from 'src/category/entities/category.entity';
import { Color } from 'src/color/entities/color.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Image } from 'src/image/entities/image.entity';
import { Size } from 'src/size/entities/size.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Store } from 'src/store/entities/store.entity';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';

export enum ProductType {
  DIGITAL = 'digital',
  MATERIAL = 'material',
}

@Entity()
@Index(['store', 'name', 'deletedAt'], { unique: true })
export class Product extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 50,
    comment: 'Name of the product.',
  })
  name: string;

  @Column({
    type: 'decimal',
    default: 0,
    precision: 10,
    scale: 2,
    comment: 'Price of the product',
  })
  price: number;

  @Column({
    type: 'decimal',
    default: null,
    nullable: true,
    precision: 10,
    scale: 2,
    comment: 'Promotion price of the product',
  })
  promotionPrice: number;

  @Column({
    type: 'boolean',
    default: false,
    nullable: true,
    comment: 'This product will appear on the home page',
  })
  isFeatured: boolean;

  @Column({
    type: 'boolean',
    default: false,
    nullable: true,
    comment: 'This product will not appear anywhere in the store',
  })
  isArchived: string;

  @Column({
    type: 'enum',
    enum: ProductType,
    default: ProductType.MATERIAL,
  })
  productType: ProductType;

  @ManyToOne(() => Store, (store) => store.products)
  store: Store;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Size, (size) => size.products)
  size: Size;

  @ManyToOne(() => Color, (color) => color.products)
  color: Color;

  @ManyToOne(() => Stock, (stock) => stock.products)
  stock: Stock;

  @OneToMany(() => Image, (image) => image.product)
  image: Image[];
}
