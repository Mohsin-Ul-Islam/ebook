import express from 'express';
import orderController from '../controllers/order';

const router: express.Router = express.Router();

router.get('/success', orderController.getSuccessPage);
router.get('/failure', orderController.getFailurePage);

export default router;