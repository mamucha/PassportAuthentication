const exppress = require('express');
const router = exppress.Router();

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req, res) => {
  console.log(req.body);
  res.send('hello');
});

module.exports = router;
