import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';
import { errorHandler } from './helpers';

const { baseUrl, port } = config.server;
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routes);
server.use(errorHandler);

server.listen({port}, () => {
  console.log(`Server listening on http://${baseUrl}:${port}`);
});

// User.sync()
//   .then(() => {
//     console.log('Table User created.');
//     Task.sync()
//       .then(() => {
//         console.log('Table Task created.');
        
//       })
//       .catch(err => console.error("Uh-oh, couldn't create table Task.", err.message));
//   })
//   .catch(err => console.error("Uh-oh, couldn't create table User.", err.message));
