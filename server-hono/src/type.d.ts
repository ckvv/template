import type { logger } from '#utils';

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
