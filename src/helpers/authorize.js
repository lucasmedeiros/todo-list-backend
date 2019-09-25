import expressJwt from 'express-jwt';
import config from '../config';

const { secret } = config.jwt;

const authorize = () => expressJwt({ secret });

export default authorize;
