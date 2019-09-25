import express from 'express';
import utils from './utils';
import { UserController } from './controllers';

const routes = express.Router();

routes.get('/', (req, res) => {
  const user = utils.getQueryParameters(req.query.name, 'World');
  const message = `Hello, ${user}!`;
  return res.json({message});
});
routes.get('/users/:id', UserController.get);

routes.post('/users', UserController.store);

export default routes;
