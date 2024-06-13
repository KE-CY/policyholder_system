import { Entity, PrimaryGeneratedColumn, JoinTable, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Policyholder {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  policyholderNo!: number;

  @Column()
  name!: string;

  @CreateDateColumn()
  joinedAt!: Date;

  @OneToMany(() => Policyholder, policyholder => policyholder.id)
  leftPolicyholder!: Policyholder[];

  @OneToMany(() => Policyholder, policyholder => policyholder.id)
  rightPolicyholder!: Policyholder[];

  @Column({ default: false })
  isIndirect!: boolean

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;
}
