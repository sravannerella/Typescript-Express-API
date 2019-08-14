import {Router} from 'express';
import { AuthController } from '../../controllers';

const authRouter = Router();

authRouter.get('/', AuthController.authenticate);

export default authRouter;