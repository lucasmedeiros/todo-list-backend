import express from 'express';
import utils from './utils';

const routes = express.Router();

routes.get('/', (req, res) => {
  const user = utils.getQueryParameters(req.query.name, 'World');
  const message = `Hello, ${user}!`;
  return res.json({message});
});

export default routes;
