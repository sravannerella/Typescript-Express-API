import {Router} from 'express';
import Routes from './retail';
import AuthRoutes from './auth';

const router = Router();
router.use('/retail-history', Routes);
router.use('/auth', AuthRoutes);

export default router;