import { config } from '#config';
import { createDecoder, createSigner, createVerifier } from 'fast-jwt';

export const decode = createDecoder();
export const sign = createSigner({ key: async () => config.SECRET });
export const verify = createVerifier({ key: async () => config.SECRET });
