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
  @ApiProperty({})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({})
  @Column({ length: 50 })
  name: string;

  @ApiProperty({})
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({})
  @Column({ nullable: true })
  email: string;

  @ApiProperty({})
  @Column({ nullable: true })
  web: string;

  @ApiProperty({})
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
