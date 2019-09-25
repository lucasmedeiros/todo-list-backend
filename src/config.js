const config = {};

const DEFAULT_SERVER_PORT = 5000;

const port = (process.env.NODE_ENV === 'production') ? process.env.PORT : null;

config.mysql = {
  user: `${process.env.MYSQL_USER}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  db: `${process.env.MYSQL_DATABASE}`,
  host: process.env.MYSQL_HOST || 'localhost',
};

config.jwt = {
  secret: `${process.env.JWT_SECRET}`,
};

config.server = {
  port: port || process.env.SERVER_PORT || DEFAULT_SERVER_PORT,
  baseUrl: process.env.SERVER_BASE_URL || 'localhost',
};

export default config;
