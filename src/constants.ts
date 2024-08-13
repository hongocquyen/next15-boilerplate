import { ENV_NAME } from './types';

export const ENV: ENV_NAME =
  (process.env.NODE_ENV as ENV_NAME) || ENV_NAME.PRODUCTION;

export const API_ENDPOINT = (() => {
  const apis: Record<typeof ENV, string> = {
    production: '',
    development: 'http://localhost:8080/',
  };
  return apis[ENV];
})();
