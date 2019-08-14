import {Router} from 'express';
import {RetailController} from '../../controllers';
import {checkLDAP} from '../../middleware/checkLDAP';

const retailRouter = Router();

retailRouter.get('/', [checkLDAP], RetailController.history);

export default retailRouter;