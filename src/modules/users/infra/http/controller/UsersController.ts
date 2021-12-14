import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreaterUserService from '@modules/users/services/CreateUserService';

export default class UsersControler {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreaterUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  }
}
