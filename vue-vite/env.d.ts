/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

export {};

declare global {
  interface Response {
    data?: {
      code: number;
      data: any;
      message?: any;
    };
  }
}
