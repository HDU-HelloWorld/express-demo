var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/message', (req, res) => {
  console.log(req.body);
  res.send('Successfully posted message');
});

router.get('/api/message', (req, res) => {
  console.log(req.body);
  res.send('This is get page');
});

module.exports = router;
