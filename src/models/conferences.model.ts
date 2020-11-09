import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, BelongsToMany } from 'sequelize-typescript';

import UserConference from './user_conference.model';
import User from '../models/users.model';

@Table({ modelName: 'conferences', timestamps: true, paranoid: true })
export default class Conference extends Model<Conference> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  name: string;

  @AllowNull(false)
  @Column(DataType.DATE())
  date: Date;

  @AllowNull(false)
  @Column(DataType.FLOAT())
  quota: number;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  location: string;

  @AllowNull(false)
  @Column(DataType.TINYINT())
  state: boolean;

  @BelongsToMany(() => User, () => UserConference)
  users: User[];
}
