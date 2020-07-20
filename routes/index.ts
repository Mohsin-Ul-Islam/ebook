import express from 'express';
import homeRouter from './home';

const router: express.Router = express.Router();

router.get('/', homeRouter);

export default router;