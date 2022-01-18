import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity("room")
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "character varying", nullable: true })
  Name: string;

  @Column({ type: "integer", nullable: false })
  Age: number;

  @Column({ type: "character varying", nullable: true })
  Identification: string;

  @Column({ type: "character varying", nullable: true })
  Passport: string;

  @Column({ type: "character varying", nullable: true })
  Email: string;

  @Column({ type: "character varying", nullable: true })
  MobileNumber: string;

  @Column({ type: "character varying", nullable: true })
  PhoneNumber: string;

  @Column({ type: "boolean", nullable: true })
  VerifiedPhoneNumber: boolean;

  @Column({ type: "boolean" })
  VerifiedEmail: boolean;

  @Column({ type: "boolean" })
  VerifiedMobileNumber: boolean;

  @Column({ type: "integer", nullable: true, name: "TutorContactId" })
  TutorContactId: number;

  @Column({ type: "character varying", nullable: true })
  Signature: string;

  @Column({ type: "boolean" })
  IsMale: boolean;

  @Column({ type: "jsonb", nullable: true })
  Address: LiteralObject;

  @Column({ type: "date", nullable: true })
  BirthDate: Date;

  @Column({ type: "boolean" })
  ShareConsent: boolean;

  @Column({ type: "boolean" })
  Consent: boolean;

  @Column({ type: "character varying", nullable: true })
  UniqueKey: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
