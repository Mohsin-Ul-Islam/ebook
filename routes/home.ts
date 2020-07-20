import express from 'express';
import homeController from '../controllers/home';

const router: express.Router = express.Router();

router.get('/', homeController.getHomePage);

export default router;