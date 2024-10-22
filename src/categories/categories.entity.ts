import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Category uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Breakfast',
    description: 'Category name',
    uniqueItems: false,
  })
  @Column({ type: 'text' })
  name: string;

  @ApiProperty({
    example: 'Todays enu breakfast',
    description: 'Category description',
    uniqueItems: false,
  })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({
    description: 'Category image',
    uniqueItems: false,
  })
  @Column({ type: 'text', nullable: true })
  image: string;

  @ApiProperty({
    description: 'If the category is active',
  })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => FoodsEntity, (food) => food.category, {})
  food: FoodsEntity[];

  @ManyToOne(() => MenusEntity, (menu) => menu.category, { eager: true })
  menu: MenusEntity;
}
