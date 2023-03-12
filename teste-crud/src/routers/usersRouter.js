const express = require('express');
const UserController = require('../controllers/UsersController');

const router = express.Router();

router.get('/user', UserController.listAll)
router.get('User:id', UserController.ListOne)
router.post('user', UserController.create)
router.delete('user/id', UserController.delete)

module.exports = router  