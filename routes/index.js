const router = require('express').Router();

// authentication middlewaer
const { authenticated } = require('../config/authenticate');

/* GET home page. */
router.get('/', authenticated, function(req, res, next) {
  res.render('login');
});

module.exports = router;
