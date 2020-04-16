const express = require('express');
const router = express.Router();

// @router GET api/posts/test
// @desc Tests post route
// @access Publics
router.get('/test', (req, res) => res.json({msg : 'Profiles worked'}));

module.exports = router;