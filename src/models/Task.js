import Sequelize from 'sequelize';
import database from '../database';
import User from './User';

const Task = database.sequelize.define(
  'TB_TASKS',
  {
    task_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task_owner: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'TB_USERS',
        key: 'user_id',
      },
    },
    task_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    task_description: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    },
    task_priority: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      defaultValue: 1,
    },
    task_finished: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  },
);

Task.hasMany(User);

export default Task;
