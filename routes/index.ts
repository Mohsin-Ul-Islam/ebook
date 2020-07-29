import express from 'express';
import homeRouter from './home';
import orderRouter from './order';

const app: express.Application = express();

app.use('/', homeRouter);
app.use('/order', orderRouter);

export default app;