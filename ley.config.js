import { config } from 'dotenv-safe';
import { postgresConfig } from './app/02-util/config.js';

config();

export default postgresConfig;
