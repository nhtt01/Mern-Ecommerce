const express = require("express");
const userController = require('../Controllers/UserController')
const router = express.Router();

router.post('/sign-up',userController.createUser);
router.post('/sign-in',userController.loginUser);

module.exports = router;