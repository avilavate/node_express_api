
function authRouteFunction() {
    const express = require('express');
    const authRouter = express.Router();

    authRouter.route('/signup').post((req, res) => {
        req.logIn(req.body, () => {
            res.redirect('/auth/profile');
        });
    });

    authRouter.route('/profile').get((req, res) => {
        res.json(req.user);
    });

    authRouter.route('/').get((req, res) => {
        res.send("Auth called!");
    });
    return authRouter;
}

module.exports = authRouteFunction;