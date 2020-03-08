module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('errorMsg', 'Please log in first');
    res.redirect('/localoauth/login');
  },
  authenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect('/home');
    } else return next();
  }
};
