import { CategoriesEntity } from 'src/categories/categories.entity';
import { RestaurantsEntity } from 'src/restaurants/restaurants.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'menus' })
export class MenusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true }) //TODO
  qr: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => RestaurantsEntity, (restaurants) => restaurants.menus, {
    eager: true,
  })
  restaurants: RestaurantsEntity;

  @OneToMany(() => CategoriesEntity, (categories) => categories.menus)
  categories: CategoriesEntity[];
}
