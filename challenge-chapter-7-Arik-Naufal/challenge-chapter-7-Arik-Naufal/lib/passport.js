const passport = require("passport");

const { Strategy: JwtStrategy, ExtractJwt} = require("passport-jwt")
const { Passport } = require("passport/lib")

const { User } = require("../models")

const options = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),

    secretOrKey: 'Rahasia'
}

passport.use(new JwtStrategy(options, async (payload, done) =>{
    try {
        const user = await User.findByPK(payload.id);
        return done(null,user);
    } catch (err) {
        return done(err,false)
    }
}));

module.exports = passport;