import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config({ path: '.env.local' });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: 'dabinkimjae',
  password: '',
  database: 'simple-board',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
