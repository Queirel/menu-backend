import { RestaurantsEntity } from 'src/restaurants/restaurants.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, type: 'text' })
  name: string;

  @Column({ length: 50, type: 'text' })
  lastname: string;

  @Column({ length: 100, type: 'text' })
  paswsword: string;

  @Column({ nullable: true, type: 'text' })
  phone: string;

  @Column({ unique: true, type: 'text' })
  email: string;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => RestaurantsEntity, (restaurants) => restaurants.users)
  restaurants: RestaurantsEntity[];
}
