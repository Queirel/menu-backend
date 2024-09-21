export const EnvConfig: any = () => ({
  enviroment: process.env.NODE_ENV || 'dev',

  serverPort: +process.env.SERVER_PORT || 3001,
  serverHost: process.env.SERVER_HOST || 'localhost',

  postgresHost: process.env.POSTGRES_HOST || 'localhost',
  postgresPort: +process.env.POSTGRES_PORT || 5432,
  postgresUsername: process.env.POSTGRES_USERNAME || 'postgres',
  postgresPassword: process.env.POSTGRES_PASSWORD || 'password',
  postgresDatabase: process.env.POSTGRES_DB || 'menu',
});
