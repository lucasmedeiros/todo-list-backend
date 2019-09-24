import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';
// import db from './database';

const server = express();
const { baseUrl, port } = config.server;

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routes);

// db.sequelize.authenticate()
//   .then(() => console.log('Connection to Database stablished.'))
//   .catch(err => console.error("Uh-oh, couldn't connect to database: ", err));

server.listen({port}, () => {
  console.log(`Server listening on http://${baseUrl}:${port}`);
});
