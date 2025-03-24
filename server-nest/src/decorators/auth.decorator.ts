import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from '#guards';
import { ROLES } from '#constants';

export const Auth = (roles: string[]) => {
  return applyDecorators(
    SetMetadata(ROLES.ROLES_METADATAKEY, roles),
    UseGuards(RolesGuard),
  );
};
