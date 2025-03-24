import { Inject } from '@artus/core';
import { Controller, GET } from '@artusx/core';
import type { ArtusxContext } from '@artusx/core';
import { UserService } from '../service/user';

@Controller()
export default class UserController {
  @Inject()
  user: UserService;

  @GET('/user')
  async home(ctx: ArtusxContext) {
    (ctx as any).body = await this.user.findAll();
  }
}
