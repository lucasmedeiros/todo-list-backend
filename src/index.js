import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';
import { User, Task } from './models';

const server = express();
const { baseUrl, port } = config.server;

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routes);

User.sync()
  .then(() => {
    console.log('Table User created.');
    Task.sync()
      .then(() => {
        console.log('Table Task created.');
        server.listen({port}, () => {
          console.log(`Server listening on http://${baseUrl}:${port}`);
        });
      })
      .catch(err => console.error("Uh-oh, couldn't create table Task.", err.message));
  })
  .catch(err => console.error("Uh-oh, couldn't create table User.", err.message));
