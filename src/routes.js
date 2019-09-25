import express from 'express';
import utils from './utils';
import { UserController, TaskController } from './controllers';
import { authorize } from './helpers';

const routes = express.Router();

routes.get('/', (req, res) => {
  const user = utils.getQueryParameters(req.query.name, 'World');
  const message = `Hello, ${user}! Server is up and running.`;
  return res.json({message});
});
routes.get('/users/:id', authorize(), UserController.get);
// routes.get('/tasks', authorize(), TaskController.get);

routes.post('/users', UserController.store);
routes.post('/users/authenticate', UserController.authenticate);
routes.post('/tasks', authorize(), TaskController.store);

export default routes;
