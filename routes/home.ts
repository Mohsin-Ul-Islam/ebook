import express from 'express';
import homeController from '../controllers/home';
import orderController from '../controllers/order';

const router: express.Router = express.Router();

router.get('/', homeController.getDefaultPage);
router.get('/:id', homeController.getPageById);
router.get('/:id/order/success', orderController.getSuccessPage);
router.get('/:id/order/failure', orderController.getFailurePage);

export default router;