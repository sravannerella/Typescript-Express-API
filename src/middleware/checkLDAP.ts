import {Request, Response, NextFunction} from 'express';

export const checkLDAP = (req: Request, resp: Response, next: NextFunction) => {
    console.log("MIDDLEWARE CHECK");
    next();
}