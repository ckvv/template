/// <reference types="vite/client" />

export {};

declare global {
  interface Response {
    data?: {
      code: number;
      data: any;
      message?: any;
    };
  }
  interface RequestInit {
    _toast?: boolean;
  }
}
