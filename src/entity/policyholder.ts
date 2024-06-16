import { Entity, PrimaryGeneratedColumn, JoinColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

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

  @ManyToOne(() => Policyholder, policyholder => policyholder.code)
  @JoinColumn({ name: "introducerCode" })
  introducerCode?: Policyholder;

  @OneToOne(() => Policyholder, policyholder => policyholder.code)
  @JoinColumn({ name: "lCode" })
  lCode?: Policyholder;

  @OneToOne(() => Policyholder, policyholder => policyholder.code)
  @JoinColumn({ name: "rCode" })
  rCode?: Policyholder;

  @Column({ default: false })
  isIndirect!: boolean

  @Column({ default: false })
  disabled!: boolean

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;
}
