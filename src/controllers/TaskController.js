import { TaskService } from '../services';

const TaskController = {
  store(req, res, next) {
    const currentUser = req.user;
    TaskService.save(req.body, currentUser.sub)
      .then(task => res.json(task))
      .catch(err => next(err));
  },

  get(req, res, next) {
    const currentUser = req.user;

    TaskService.getByUserId(currentUser.sub)
      .then(tasks => res.json(tasks))
      .catch(err => next(err));
  },

  update(req, res, next) {
    const { taskId, status } = req.body;
    const currentUser = req.user;

    TaskService.updateTaskStatus(taskId, status, currentUser.sub)
      .then(task => res.json(task))
      .catch(err => next(err));
  }
};

export default TaskController;
