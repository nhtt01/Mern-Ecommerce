const express = require("express");
const userController = require('../Controllers/UserController')
const router = express.Router();

router.post('/',userController.createUser);

module.exports = router;