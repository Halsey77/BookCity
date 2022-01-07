const passport = require('passport')
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const {models} = require('../models');
const taikhoan = models.taikhoan;

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
    async function(username, password, done) {
        try {
            const user = await taikhoan.findOne({raw:true, where: {email: username, biXoa: false}});
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const match = await validPassword(user, password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        }
        catch (err) {
            return done(err);
        }
    })
);

function validPassword(user, password) {
    return bcrypt.compare(password, user.matKhau);
}

passport.serializeUser(function(user, done) {
    done(null, {maTaiKhoan: user.maTaiKhoan,
        hoVaTen: user.hoVaTen,
        email: user.email,
        maPhanQuyen: user.maPhanQuyen});
});

passport.deserializeUser(async function(user, done) {
    return done(null, user);
});

module.exports = passport;
