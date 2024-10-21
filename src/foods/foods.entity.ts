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
  @ApiProperty({})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({})
  @Column({ type: 'text' })
  name: string;

  @ApiProperty({})
  @Column({ type: 'text' })
  food: string;

  @ApiProperty({})
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({})
  @Column({ type: 'numeric', default: 0 })
  price: number;

  @ApiProperty({})
  @Column({ type: 'numeric', default: 0 })
  offer: number;

  @ApiProperty({})
  @Column({ type: 'text', nullable: true })
  image: string;

  @ApiProperty({})
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
