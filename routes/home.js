const router = require('express').Router();

const { ensureAuth } = require('../config/authenticate');

router.get('/', ensureAuth, (req, res, next) => {
  res.render('home');
});

module.exports = router;
