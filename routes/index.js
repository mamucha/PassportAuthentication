const exppress = require('express');
const router = exppress.Router();

router.get('/', (req, res) => res.send('Welcome'));

module.exports = router;
