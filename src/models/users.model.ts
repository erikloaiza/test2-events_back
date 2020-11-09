import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';

import Role from './role.model';
import Conference from './conferences.model';
import UserConference from './user_conference.model';

@Table({ modelName: 'user', timestamps: true, paranoid: true })
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  name: string;

  @ForeignKey(() => Role)
  @Column(DataType.INTEGER())
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  password: string;

  @BelongsToMany(() => Conference, () => UserConference)
  conferences: Conference[];
}
