import { ApiProperty } from '@nestjs/swagger';
import { RestaurantsEntity } from 'src/restaurants/restaurants.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'User uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({
    example: 'Federico',
    description: 'User name',
    uniqueItems: false,
  })
  @Column({ length: 50 })
  name: string;

  @ApiProperty({
    example: 'Queirel',
    description: 'User Lastname',
    uniqueItems: false,
  })
  @Column({ length: 50 })
  lastname: string;

  @ApiProperty({
    example: 'SNo8o28ofi829389!_=21dmoim',
    description: 'User password',
    uniqueItems: false,
  })
  @Column({ length: 100, select: false })
  password: string;

  @ApiProperty({
    example: '+5491132154548',
    description: 'User phone',
    uniqueItems: true,
  })
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({
    example: 'federicoqueirel@hotmail.com',
    description: 'User email',
    uniqueItems: true,
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'if the user is active',
  })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({
    example: 'admin',
    description: 'User role',
    uniqueItems: false,
  })
  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }

  @OneToMany(() => RestaurantsEntity, (restaurant) => restaurant.user)
  restaurant: RestaurantsEntity[];
}
