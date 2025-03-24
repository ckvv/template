import { ArtusApplication, ArtusInjectEnum, Inject, Injectable } from '@artus/core';
import { Sequelize as _Sequelize } from '@sequelize/core';
import { User } from './user';

export const models = [User];

@Injectable()
export class Sequelize extends _Sequelize {
  @Inject(ArtusInjectEnum.Application)
  app: ArtusApplication;

  constructor() {
    super();

    super({
      // ...this.app.config,
      models,
    });
  }
}

export { User };
