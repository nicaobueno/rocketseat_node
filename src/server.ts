import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import routes from './routes';
import './database';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Active 😡');
});
