import 'fastify';

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    SECRET: string;
  }
}

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      id: number;
    } | null;
  }
}
