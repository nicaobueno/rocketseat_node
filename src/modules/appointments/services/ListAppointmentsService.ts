/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';
// import AppError from '@shared/errors/AppError';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

@injectable()
class ListAppointmentService {
  constructor(
    @inject('AppointmentRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute(): Promise<Appointment[]> {
    // if (findAppointmentInSameDate) {
    //   throw new AppError('Esse horário já está preenchido');
    // }

    const appointment = await this.appointmentsRepository.list();

    return appointment;
  }
}

export default ListAppointmentService;

// SERVICE NUNCA TEM ACESSO AOS DADOS DA REQUISIÇÃO E DA RESPOSTA
