import User from '../models/User.js'
import config from 'config'
import passportJWT from 'passport-jwt'

var JwtStrategy = passportJWT.Strategy,
    ExtractJwt = passportJWT.ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('secret');

export default (passport) => { passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try{
        let user = await User.findOne({_id: jwt_payload.id})
        if(!user){
            return done(null, false);      
        }
        return done(null, user);
    }
    catch(e){
        return done(err, false);
    }
}))};