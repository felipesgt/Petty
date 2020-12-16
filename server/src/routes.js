import { Router } from 'express';
import ScheduleController from './controller/ScheduleController';

import SessionController from './controller/SessionController';
import UserController from './controller/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});

routes.post('/users', UserController.store);
routes.post('/schedule', ScheduleController.store);
routes.post('/sessions', SessionController.store);
routes.get('/authenticated', (req, res) => res.send());
export default routes;
