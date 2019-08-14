import {Router} from 'express';
import {RetailController} from '../../controllers';
import {isLDAPAuthenticated} from '../../middleware/checkLDAP';

const retailRouter = Router();

retailRouter.get('/', [isLDAPAuthenticated], RetailController.history);

export default retailRouter;