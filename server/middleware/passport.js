import User from '../models/User.js'
import config from 'config'
import passportJWT from 'passport-jwt'

var JwtStrategy = passportJWT.Strategy,
    ExtractJwt = passportJWT.ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('secret');

export default (passport) => { passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);        
        }
    });
}))};