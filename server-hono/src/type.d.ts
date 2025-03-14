import type { logger } from './utils/index.js';

export interface BlankEnv {
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    logger: typeof logger;
  };
}
