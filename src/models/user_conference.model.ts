import { AllowNull, AutoIncrement, Column, DataType, Model, ForeignKey, Table } from 'sequelize-typescript';

import User from './users.model';
import Conference from './conferences.model';

@Table({ modelName: 'user_conference', timestamps: true, paranoid: true })
export default class UserConference extends Model<UserConference> {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER())
  userId: number;

  @ForeignKey(() => Conference)
  @Column(DataType.INTEGER())
  conferenceId: number;
}
