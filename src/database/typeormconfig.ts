import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import * as dotenv from 'dotenv';

dotenv.config({ path: join(__dirname, '../../', '.env') });

export enum ENVIRONMENTS {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  TEST = 'tests',
}

const production: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [
    join(__dirname, '../**/infrastructure/persistence/entities/*.entity.ts'),
  ],
  namingStrategy: new SnakeNamingStrategy(),
};

const development: DataSourceOptions = {
  type: 'sqlite',
  database: `./data/development.db`,
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: [
    join(__dirname, '../**/infrastructure/persistence/entities/*.entity.ts'),
  ],
  namingStrategy: new SnakeNamingStrategy(),
};

const automatedTests: DataSourceOptions = {
  type: 'sqlite',
  database: `./data/test.db`,
  synchronize: false,
  dropSchema: true,
  logging: false,
  entities: [
    join(__dirname, '../**/infrastructure/persistence/entities/*.entity.ts'),
  ],
  namingStrategy: new SnakeNamingStrategy(),
};

export const dataSourceOptions: DataSourceOptions = (() => {
  if (process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION) {
    return production;
  }

  if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
    return development;
  }

  if (process.env.NODE_ENV === ENVIRONMENTS.TEST) {
    return automatedTests;
  }

  throw new Error('No environment defined');
})();
const dataSource = new DataSource({
  ...dataSourceOptions,
  entities: [
    join(__dirname, '../**/infrastructure/persistence/entities/*.entity.ts'),
  ],
});

export default dataSource;
