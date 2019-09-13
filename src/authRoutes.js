
function authRouteFunction() {
    const express = require('express');
    const authRouter = express.Router();

    authRouter.route('/signup').post((req, res) => {
       // console.log('body' + req.body);
       res.send(req.body);
    });

    authRouter.route('/').get((req, res) => {
        res.send("Auth called!");
    });
    return authRouter;
}

module.exports = authRouteFunction;