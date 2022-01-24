import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
@Entity("User")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  lastname: string;

  @Column({ type: "int",  length: 5 })
  points: number;

  @Column({ type: "varchar", length: 20 })
  password: string;
}
