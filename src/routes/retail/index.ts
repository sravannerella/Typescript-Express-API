import {Router} from 'express';
import {RetailController} from '../../controllers';

const router = Router();

router.get('/', RetailController.history);

export default router;