import config from '../config';
import { User } from '../models';

const { secret } = config.jwt;

async function authenticate({ username, password }) {
  const user = await User.findOne({
    where: {
      user_username: username,
    },
  }).catch(_err => {
    return null;
  });

  console.log(user);
}

async function getById(id) {
  const user = await User.findByPk(parseInt(id)).catch(err => {
    return null;
  });

  const {user_password, ...userWithoutPassword} = user.dataValues;
  return userWithoutPassword;
}

export default {
  authenticate,
  getById,
};