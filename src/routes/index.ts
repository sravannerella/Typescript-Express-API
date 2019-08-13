import {Router} from 'express';
import Routes from './retail';

const routes = Router();
routes.use('/retail-history', Routes);

export default routes;