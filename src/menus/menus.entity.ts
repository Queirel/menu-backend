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
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Menu uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({
    example: 'Dinner',
    description: 'Menu name',
    uniqueItems: false,
  })
  @Column({ type: 'text' })
  name: string;

  @ApiProperty({
    example: 'Dinner offer',
    description: 'Menu description',
    uniqueItems: false,
  })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({
    description: 'Menu qr code',
    uniqueItems: true,
  })
  @Column({ type: 'text', nullable: true }) //TODO
  qr: string;

  @ApiProperty({
    description: 'If the menu is active',
  })
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
