const passport = require('passport');

module.exports = passpoerConfig = (app) => {
    console.log("passport initialize");
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    require('./strategies/local.strategy');
    return app;
};