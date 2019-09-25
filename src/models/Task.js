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
    task_status: {
      type: Sequelize.ENUM,
      values: ['active', 'pending', 'finished'],
    },
  },
  {
    timestamps: true,
  },
);

User.hasMany(Task);
Task.belongsTo(User);

export default Task;
