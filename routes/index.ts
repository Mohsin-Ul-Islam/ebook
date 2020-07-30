import express from 'express';
import homeRouter from './home';

const app: express.Application = express();

app.use('/', homeRouter);

export default app;