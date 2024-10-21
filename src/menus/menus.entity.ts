import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({})
  @Column({ type: 'text' })
  name: string;

  @ApiProperty({})
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({})
  @Column({ type: 'text', nullable: true }) //TODO
  qr: string;

  @ApiProperty({})
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.menu, {
    eager: true,
  })
  restaurant: RestaurantsEntity;

  @OneToMany(() => CategoriesEntity, (category) => category.menu)
  category: CategoriesEntity[];
}
