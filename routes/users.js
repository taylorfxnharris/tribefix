var express = require('express');
var passport = require('passport');
var router = express.Router();
// var User = require('../models/user');
// var Event = require('../models/event');

var authenticated = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tribe' });
});

// GET /signup
router.get('/signup', function(req, res, next) {
  res.render('./users/signup.ejs', { message: req.flash() });
});

// POST /signup
router.post('/signup', function(req, res, next) {
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/edit', // double check route???
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signUpStrategy(req, res, next)
});

// GET /login
router.get('/login', function(req, res, next) {
  res.render('./users/login.ejs', { message: req.flash() });
});

// POST /login
router.post('/login', function(req, res, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/show',
    failureRedirect : '/login',
    failureFlash : true
  });

  return loginProperty(req, res, next);
});

// GET /logout
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

// Edit user
router.get('/edit', authenticated, function(req, res, next) {
  res.render('./users/edit.ejs', { message: req.flash() });
});

// Show user
router.get('/show', authenticated, function(req, res, next) {
  res.render('./users/show.ejs', { message: req.flash() });
});

// Create user
router.post('/edit', authenticated, function(req, res, next) {
  var interest = {
    name: name
  };
  currentUser.interests.push(interest);
    currentUser.save(function (err) {
      if (err) return next(err);
      res.redirect('/show');
    });
});


module.exports = router;
