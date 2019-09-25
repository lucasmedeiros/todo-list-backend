import { TaskService } from '../services';

const TaskController = {
  store(req, res, next) {
    const currentUser = req.user;
    TaskService.save(req.body, currentUser.sub)
      .then(task => res.json(task))
      .catch(err => next(err));
  },
};

export default TaskController;
