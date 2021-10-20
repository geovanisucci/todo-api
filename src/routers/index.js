const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send('TODO Api Service Version 1.0')
  });


  module.exports = router;