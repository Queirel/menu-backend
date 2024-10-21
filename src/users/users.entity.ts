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
  @ApiProperty({})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({})
  @Column({ length: 50 })
  name: string;

  @ApiProperty({})
  @Column({ length: 50 })
  lastname: string;

  @ApiProperty({})
  @Column({ length: 100, select: false })
  password: string;
  @ApiProperty({})
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({})
  @Column({ unique: true })
  email: string;

  @ApiProperty({})
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({})
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
