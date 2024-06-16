import { Entity, PrimaryGeneratedColumn, JoinTable, Column, OneToMany, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

@Entity()
export class Policyholder {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  code!: string;

  @Column()
  name!: string;

  @CreateDateColumn()
  joinedAt!: Date;

  @OneToOne(() => Policyholder, policyholder => policyholder.code)
  introducerCode!: string;

  @OneToMany(() => Policyholder, policyholder => policyholder.code)
  lCode!: Policyholder[];

  @OneToMany(() => Policyholder, policyholder => policyholder.code)
  rCode!: Policyholder[];

  @Column({ default: false })
  isIndirect!: boolean

  @Column({ default: false })
  disabled!: boolean

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;
}
