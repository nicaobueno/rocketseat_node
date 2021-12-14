import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ListAppointmentService from '@modules/appointments/services/ListAppointmentsService';

export default class AppointmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);
    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate,
    });

    return res.json({ appointment });
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listAppointment = container.resolve(ListAppointmentService);
    const appointment = await listAppointment.execute();

    return res.json(appointment);
  }
}
