const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

const { saveReturnTo } = require("../middleware");

const usersController = require('../controllers/user.js');
const user = require('../models/user');

router.route('/signup')
.get(usersController.renderSignupForm)
.post(usersController.signup);

router.route('/login')
.get(usersController.renderLoginForm)
.post(
  saveReturnTo,
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  usersController.loginSuccessHandler
);


router.get('/logout', usersController.logout );

module.exports = router;