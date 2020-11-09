import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ modelName: 'role', timestamps: true, paranoid: true })
export default class Role extends Model<Role> {
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
}
