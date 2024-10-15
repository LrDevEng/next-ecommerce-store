import { config } from 'dotenv-safe';
import { postgresConfig } from './app/util/config.ts';

config();

export default postgresConfig;
