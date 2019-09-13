const passport = require('passport');
const { Strategy } = require('passport-local');

module.exports = function localStrategy() {
    passport.use(
        new Strategy(
            {
                usernameField: 'username',
                passwordField: 'password'
            },
            (username, passport, done) => {
                const user = { username, passport };
                done(null, user);
            }
        ));
};