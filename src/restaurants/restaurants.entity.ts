import { ApiProperty } from '@nestjs/swagger';
import { MenusEntity } from 'src/menus/menus.entity';
import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'restaurants' })
export class RestaurantsEntity {
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Restaurant uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({
    example: 'The Resto',
    description: 'Restaurant name',
    uniqueItems: false,
  })
  @Column({ length: 50 })
  name: string;

  @ApiProperty({
    example: '+549116587845',
    description: 'Restaurant phone',
    uniqueItems: true,
  })
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({
    example: 'theresto@resto.com',
    description: 'Restaurant email',
    uniqueItems: true,
  })
  @Column({ nullable: true })
  email: string;

  @ApiProperty({
    example: 'theresto.com',
    description: 'Restaurant website',
    uniqueItems: true,
  })
  @Column({ nullable: true })
  web: string;

  @ApiProperty({
    description: 'If the restaurant is active',
  })
  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // maps //TODO

  @ManyToOne(() => UsersEntity, (user) => user.restaurant, { eager: true })
  user: UsersEntity;

  @OneToMany(() => MenusEntity, (menu) => menu.restaurant)
  menu: MenusEntity[];
}
