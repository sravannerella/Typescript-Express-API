import {Router} from 'express';
import morgan from 'morgan';

export const handleLogger = (router:Router) => {
    router.use( morgan('combined') )
}
