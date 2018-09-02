const express = require('express');
const router = express.Router();

/* Controllers */
const userController = require('../controllers/userController');

/* Routes */
router.get('/', (req, res) => {
  res.status(200).send({
    title: 'Chat API - Built with love on NodeJS.',
    version: '0.0.1',
  });
});

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.post('/users', userController.post);
router.put('/users/:id', userController.put);
router.delete('/users/:id', userController.delete);

router.post('/login', userController.login);


module.exports = router;