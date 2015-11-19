var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');
var Event = require('../models/event');
var Interest = require('../models/interest');

var authenticated = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
};

// New
router.get('/new', authenticated, function(req, res, next) {
  res.render('./interests/new.ejs', { message: req.flash() });
});

// POST /interest
// router.post('/interests', function(req, res, next) {
//   var signUpStrategy = passport.authenticate('local-signup', {
//     successRedirect : '/events', // double check route???
//     failureRedirect : '/interests/new',
//     failureFlash : true
//   });

//    return signUpStrategy(req, res, next)
// });

// Edit
router.get('/:id/edit', authenticated, function(req, res, next) {
  res.render('./interests/edit.ejs', { message: req.flash() });
});

module.exports = router;
