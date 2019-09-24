import Sequelize from 'sequelize';
import config from '../config';

const { db, password, user, host } = config.mysql;

const database = {};

const sequelize = new Sequelize({
  database: db,
  username: user,
  password,
  host,
  dialect: 'mysql',
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

export default database;
