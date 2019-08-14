import {Request, Response, NextFunction} from 'express';

export const isLDAPAuthenticated = (req: Request, resp: Response, next: NextFunction) => {
    console.log("MIDDLEWARE AUTHENTICATE");
    if(! req.isAuthenticated()){
        next();
    } else {
        resp.status(400).json({
            message: "Bad Request"
        });
    }
}

export const isLDAPAuthorized = (req: Request, resp: Response, next: NextFunction) => {
    console.log("MIDDLEWARE AUTHORIZED");
    next();
}