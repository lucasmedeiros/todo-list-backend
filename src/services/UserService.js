import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import { User } from '../models';

const { secret } = config.jwt;

async function authenticate({ username, password }) {
  const user = await User.findOne({
    where: {
      user_username: username,
    },
  }).catch(err => {
    throw new Error(err.message);
  });

  if (user) {
    const isValidPassword = await bcrypt.compare(password, user.user_password);

    if (isValidPassword) {
      const token = jwt.sign({ sub: user.user_id }, secret);
      const {user_password, ...userWithoutPassword} = user.dataValues;
      
      return {...userWithoutPassword, token};
    } else throw new Error('Incorrect password');
  } else throw new Error(`No users matching username: ${username}`);
}

async function save({ username, password }) {
  if (!username)
    throw new Error('Username field not provided');
    
  if (!password)
    throw new Error('Password field not provided');
  
  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    user_username: username,
    user_password: encryptedPassword,
  }).catch(err => {
    throw new Error(`Couldn't store new User: ${err.message}`);
  });

  const {user_password, ...userWithoutPassword} = user.dataValues;

  return userWithoutPassword;
}

async function getById(id) {
  const user = await User.findByPk(parseInt(id)).catch(err => {
    throw new Error(err.message);
  });

  if (!user)
    throw new Error(`Couldn't find user with id: ${id}`);

  const {user_password, ...userWithoutPassword} = user.dataValues;
  return userWithoutPassword;
}

export default {
  authenticate,
  save,
  getById,
};
