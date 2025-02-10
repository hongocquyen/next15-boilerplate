import { ENV_NAME } from '../models/enums';

export const ENV: ENV_NAME =
  (process.env.NODE_ENV as ENV_NAME) || ENV_NAME.PRODUCTION;
