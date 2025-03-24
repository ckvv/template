import { Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { getReqParms } from '../utils';
import { ROLES } from '../constants';

// 鉴权
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(
      ROLES.ROLES_METADATAKEY,
      context.getHandler(),
    );
    if (!roles) return true;
    const request = context.switchToHttp().getRequest();
    const { role } = getReqParms(request);
    request.user = {
      id: Math.random(),
      role,
    };
    return roles.includes(role);
  }
}
