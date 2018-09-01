const express = require('express');
const router = express.Router();

/* Controllers */
const userController = require('../controllers/userController');

/* Routes */
router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Chat API - Built with love on NodeJS.",
    version: "0.0.1"
  });
});

router.get('/user', userController.get);


module.exports = router;