import express from 'express';
import homeController from '../controllers/home';

const router: express.Router = express.Router();

router.get('/', homeController.getDefaultPage);
router.get('/:id', homeController.getPageById);

export default router;