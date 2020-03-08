const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
