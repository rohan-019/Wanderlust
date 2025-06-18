const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

const { saveReturnTo } = require("../middleware");

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

router.post('/signup', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);

        // ✅ Auto-login the user after registration
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash('success', 'Welcome, you are now signed in!');
            res.redirect('/listings');
        });

    } catch (err) {
        console.error(err);
        req.flash('error', 'User already registered or invalid data! Please try again.');
        res.redirect('/signup');
    }
});


router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

router.post(
  '/login',
  saveReturnTo,
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  (req, res) => {
    const redirectUrl = res.locals.returnTo ;
    req.flash('success', `Welcome back, ${req.user.username}!`);
    res.redirect(redirectUrl || '/listings');
  }
);


router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
            req.flash('error', 'Logout failed, please try again.');
            return res.redirect('/listings');
        }
        req.flash('success', 'Logged out successfully!');
        res.redirect('/listings');
    });
});

module.exports = router;