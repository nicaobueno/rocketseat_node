import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuth';
import AppointmentsController from '../controller/AppointmentsController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', appointmentController.list);

appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
