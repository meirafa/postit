import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')//nome da tabela
export class UserEntity {
  @PrimaryGeneratedColumn()//incrementa automaticamente
  public id: number;

  @Column({ length: 150 })//tamanho max pro nome
  public name: string;

  @Column({ length: 150, unique: true })//tamanho max e unico
  public email: string;

  @Column({ length: 80 })
  public password: string;

  @Column({ length: 50, nullable: true })// tamanho max, opcional
  public role?: string;

  @Column({ length: 250, nullable: true })
  public imageUrl?: string;

  @CreateDateColumn() //data que o usuario é criado
  public createdAt: Date;

  @UpdateDateColumn() //data que o usuario é alterado
  public updatedAt: Date;
}
