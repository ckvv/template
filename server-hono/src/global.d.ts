declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    SECRET: string;
    GITHUB_OAUTH_CLIENT_ID: string;
    GITHUB_OAUTH_SECRET: string;
  }
}
