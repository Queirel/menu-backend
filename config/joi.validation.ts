import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  SERVER_PORT: Joi.number(),
  SERVER_HOST: Joi.string().default('localhost'),

  POSTGRES_HOST: Joi.string().default('localhost'),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_USERNAME: Joi.string().default('postgres'),
  POSTGRES_PASSWORD: Joi.string().default('password'),
  POSTGRES_DB: Joi.string().default('menu'),
});
