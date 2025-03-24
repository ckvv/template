import type { logger } from './utils/index.js';

export interface BlankEnv {
  Bindings: NodeJS.ProcessEnv;
  Variables: {
    logger: typeof logger;
    user?: {
      id: number;
      username: string;
    };
  };
}
