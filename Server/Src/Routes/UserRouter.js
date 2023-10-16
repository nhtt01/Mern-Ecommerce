const express = require("express");
const {authMiddleware} = require("../Middleware/AuthMiddleware")

const userController = require('../Controllers/UserController')
const router = express.Router();

router.post('/sign-up',userController.createUser);
router.post('/sign-in',userController.loginUser);
router.put('/update-user/:id',userController.updateUser);
router.delete('/delete-user/:id',authMiddleware ,userController.deleteUser);
router.get('/get-all',authMiddleware ,userController.getAllUser);

module.exports = router;