import { Request, Response, NextFunction } from 'express';
import passport from '../configs/passport';


export const authJwt = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
        'jwt',
        { session: false },
        (err: Error, user: any, info: any) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Something went wrong' });
            }
            if (!user && info && info.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (!user && info && info.name === 'JsonWebTokenError') {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = user;
            return next();
        }
    )(req, res, next);
};