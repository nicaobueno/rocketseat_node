import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuth';
import CreaterUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreaterUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

usersRouter.patch('/avatar', ensureAuthenticated, async (req, res) => {
  return res.json({ msg: 'Avatar' });
});

export default usersRouter;
