import { CategoriesEntity } from 'src/categories/categories.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'foods' })
export class FoodsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  food: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'numeric', default: 0 })
  price: number;

  @Column({ type: 'numeric', default: 0 })
  offer: number;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => CategoriesEntity, (category) => category.food, {
    eager: true,
  })
  category: CategoriesEntity;
}
