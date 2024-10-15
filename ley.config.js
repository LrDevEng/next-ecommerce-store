import { config } from 'dotenv-safe';
import { postgresConfig } from './app/util/config';

config();

export default postgresConfig;
