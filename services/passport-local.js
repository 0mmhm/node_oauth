const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// User Model
const User = mongoose.model('User');

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Matching User
      User.findOne({ email: email })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Email is not registered' });
          }

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password not correct' });
            }
          });
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
