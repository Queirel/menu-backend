import { FoodsEntity } from 'src/foods/foods.entity';
import { MenusEntity } from 'src/menus/menus.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'categories' })
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => FoodsEntity, (foods) => foods.categories, {})
  foods: FoodsEntity[];

  @ManyToOne(() => MenusEntity, (menus) => menus.categories, { eager: true })
  menus: MenusEntity;
}
