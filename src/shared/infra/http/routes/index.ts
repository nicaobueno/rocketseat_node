import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import UsersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
