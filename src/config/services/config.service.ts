import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string().valid('development', 'production', 'test'),
      PORT: Joi.number().when('NODE_ENV', {
        is: Joi.string().equal('production'),
        then: Joi.number().required(),
        otherwise: Joi.number().optional(),
      }),
      DB_HOST: Joi.string().when('NODE_ENV', {
        is: Joi.string().equal('production'),
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
      }),
      DB_PORT: Joi.number().when('NODE_ENV', {
        is: Joi.string().equal('production'),
        then: Joi.number().required(),
        otherwise: Joi.number().optional(),
      }),
      DB_PASSWORD: Joi.string().when('NODE_ENV', {
        is: Joi.string().equal('production'),
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
      }),
      DB_USER: Joi.string().when('NODE_ENV', {
        is: Joi.string().equal('production'),
        then: Joi.string().required(),
        otherwise: Joi.string().optional(),
      }),
    });

    const { error, value: validatedEnvConfig } =
      envVarsSchema.validate(envConfig);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
