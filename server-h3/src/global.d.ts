import 'h3';

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    SECRET: string;
  }
}

declare module 'h3' {
  interface H3RouteMeta {
    auth?: boolean;
  }
  interface RouteOptions {
    auth?: boolean;
  }
}
