import { Request, Response, NextFunction } from 'express';
import passport from '../configs/passport';


export const authJwt = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
        'jwt',
        { session: false },
        (err: Error, user: any, info: any) => {
            if (err) {
                // if error occurs
                console.log(err);
                return res.status(500).json({ message: 'Something went wrong' });
            }
            if (!user && info && info.name === 'TokenExpiredError') {
                // if token expires send status 401 & tokenExpired true
                return res.status(401).json({ message: 'Unauthorized', tokenExpired: true });
            }
            if (!user && info && info.name === 'JsonWebTokenError') {
                // if token is tempered send status 401 & tokenExpired false
                return res.status(401).json({ message: 'Unauthorized', tokenExpired: false });
            }
            req.user = user;
            return next();
        }
    )(req, res, next);
};