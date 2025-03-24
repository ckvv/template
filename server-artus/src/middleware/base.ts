import { ArtusxContext } from '@artusx/core';

export async function base(ctx: ArtusxContext, next: any) {
  console.log((ctx as any).body);
  await next();
}
