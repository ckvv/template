import { DataTypes, InferAttributes, InferCreationAttributes, Model } from '@sequelize/core';
import { Attribute, NotNull } from '@sequelize/core/decorators-legacy';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Attribute(DataTypes.STRING)
  @NotNull
  declare username: string;
}
