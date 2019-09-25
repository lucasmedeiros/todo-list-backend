import bcrypt from 'bcrypt';
import { User } from '../models';
import { UserService } from '../services';

const UserController = {
  async get(req, res, next) {
    const currentUser = req.user;
    const { id } = req.params;

    if (parseInt(id) !== 1)
      return res.status(401).json({ message: "You don't have permission to access this." });
    
    const user = await UserService.getById(id).catch(err => next(err));
    return user ? res.json(user) : res.status(404).json({
      success: false,
      message: `Couldn't find any user matching id ${id}`,
    });
  },
  async store(req, res) {
    const { username, password } = req.body;

    if (!username)
      return res.status(400).json({
        success: false,
        message: 'Username field not provided.',
      });
    
    if (!password)
      return res.status(400).json({
        success: false,
        message: 'Password field not provided.',
      });
    
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      user_username: username,
      user_password: encryptedPassword,
    }).catch(err => {
      return res.status(400).json({
        success: false,
        message: `Couldn't store new User: ${err.message}`,
      });
    });

    return res.json({ user, message: 'Account created successfully' });
  }
}

export default UserController;
