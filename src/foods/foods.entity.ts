import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Food uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({
    example: 'Pizza',
    description: 'Food name',
    uniqueItems: false,
  })
  @Column({ type: 'text' })
  name: string;

  @ApiProperty({
    example: 'Pasta',
    description: 'Food type',
    uniqueItems: false,
  })
  @Column({ type: 'text' })
  food: string;

  @ApiProperty({
    example: 'Italian pasta',
    description: 'Food description',
    uniqueItems: false,
  })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({
    example: '$27.00',
    description: 'Food price',
    uniqueItems: false,
  })
  @Column({ type: 'numeric', default: 0 })
  price: number;

  @ApiProperty({
    example: '$15.00',
    description: 'Food offer',
    uniqueItems: false,
  })
  @Column({ type: 'numeric', default: 0 })
  offer: number;

  @ApiProperty({
    description: 'Food image',
    uniqueItems: false,
  })
  @Column({ type: 'text', nullable: true })
  image: string;

  @ApiProperty({
    description: 'If the food is active',
  })
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
