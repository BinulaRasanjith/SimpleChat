import passport, { DoneCallback } from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../models';
import { JwtPayload } from '../types/jwt';

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

const verifyUser = async (payload: any, done: DoneCallback) => {
    try {
        const user = await User.findOne({ where: { id: payload.id } });
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
};

const jwtStrategy = new JwtStrategy(jwtOptions, verifyUser);

passport.use(jwtStrategy);

export default passport;
