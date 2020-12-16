import { Router } from 'express';

import ScheduleController from './controller/ScheduleController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});

routes.post('/schedule', ScheduleController.store);
export default routes;
