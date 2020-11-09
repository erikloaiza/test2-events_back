import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Role from './role.model';

@Table({ modelName: 'permission', timestamps: true, paranoid: true })
export default class Permission extends Model<Permission> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  slug: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  name: string;

  @ForeignKey(() => Role)
  @Column(DataType.INTEGER())
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;
}
