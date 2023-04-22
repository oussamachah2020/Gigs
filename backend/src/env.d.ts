declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NODE_ENV: string;
      JWT_SECRET_KEY: string;
    }
  }
}
export {};
