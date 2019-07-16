import { Table, Column, Model, AllowNull } from 'sequelize-typescript';

@Table
export class Contact extends Model<Contact> {

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  dateOfBirth: Date;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  gender: string;

  @AllowNull(false)
  @Column
  budget: number;
}
