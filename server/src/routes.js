import { Router } from 'express';

import SessionController from './controller/SessionController';
import UserController from './controller/UserController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.get('/authenticated', (req, res) => res.send());
export default routes;
