var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/user');

var strategy = new LocalStrategy(
  {
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, callback) {
    // Check if user email is already in use.
    User.findOne({ 'local.email' : email }, function(err, user) {
      if (err) return callback(err);
      // if no user is found
      if (!user)  {
        return callback(null, false, req.flash('error', 'User not found.'));
      }
      // validate correct password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('error', 'Oops! Wrong password'));
      }
      return callback(null, user);
    });
  });

module.exports = strategy;
