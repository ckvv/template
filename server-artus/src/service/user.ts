import { ArtusApplication, ArtusInjectEnum, Inject, Injectable } from '@artus/core';
import { User } from '../model';

@Injectable()
export class UserService {
  @Inject(ArtusInjectEnum.Application)
  app: ArtusApplication;

  async findAll() {
    // this.app.logger.info(JSON.stringify(this.app.config))
    return User.findAll();
  }
}
