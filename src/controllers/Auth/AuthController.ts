import {Request, Response} from 'express';
import passport from '../../config/passport';

export const authenticate = () => {
    passport.authenticate('ldapauth', {session: false}, (_: Request, resp: Response) => {
        resp.status(200).json({
            message: 'Successful'
        })
    })
}