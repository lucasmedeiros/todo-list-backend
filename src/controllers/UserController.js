import { UserService } from '../services';

const UserController = {
  authenticate(req, res, next) {
    UserService.authenticate(req.body)
      .then(user => res.json(user))
      .catch(err => next(err));
  },

  get(req, res, next) {
    const currentUser = req.user;
    const { id } = req.params;

    if (parseInt(id) !== currentUser.sub)
      return res.status(401).json({ message: "You don't have permission to access this." });
    
    UserService.getById(id)
      .then(user => user ? res.json(user) : res.status(404).json({
        message: `Couldn't find any user matching id ${id}`,
      }))
      .catch(err => next(err));
  },
  
  store(req, res, next) {
    UserService.save(req.body)
      .then(user => res.json({ user: user }))
      .catch(err => next(err));
  }
}

export default UserController;
