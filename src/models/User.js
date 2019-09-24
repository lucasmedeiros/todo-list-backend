import Sequelize from 'sequelize';
import database from '../database';

const User = database.sequelize.define(
  'TB_USERS',
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

export default User;
