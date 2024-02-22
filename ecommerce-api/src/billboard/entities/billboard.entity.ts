import { Category } from 'src/category/entities/category.entity';
import { DatabaseContent } from 'src/database/entities/database.entity';
import { Store } from 'src/store/entities/store.entity';
import { Entity, Column, ManyToOne, Index, OneToMany } from 'typeorm';

@Entity()
@Index(['store', 'label', 'deletedAt'], { unique: true })
export class Billboard extends DatabaseContent {
  @Column({
    type: 'varchar',
    length: 50,
    comment: 'The label of the billboard.',
  })
  label: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'The billboard background image url.',
  })
  imageUrl: string;

  @ManyToOne(() => Store, (store) => store.billboards)
  store: Store;

  @OneToMany(() => Category, (category) => category.billboard)
  categories: Category[];
}
