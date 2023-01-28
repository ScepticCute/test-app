const express = require("express");
const { check } = require("express-validator");
const TestController = require("../controllers/TestController");
const UserController = require("../controllers/UserController");

const authMiddleware = require('../middleware/authMiddleware')
const roleCheckerMiddleware = require('../middleware/roleCheckerMiddleware')

const {
  validateRegistration,
  validateRegistrationAndLogin,
  validateError,
  validateCreateOrUpdateOrPutTests,
} = require('../utils/validations');
const router = express.Router();

// Closure Middleware
// roleCheckerMiddleware(['USER'])

//TESTS
router.get('/tests/:id',  TestController.getTest);

router.get('/tests', TestController.getAllTests);

router.post('/tests', authMiddleware, validateCreateOrUpdateOrPutTest, validateError, TestController.createTest);

router.delete('/tests/:id', authMiddleware, TestController.deleteTest);

router.patch(
  '/tests/:id',
  validateCreateOrUpdateOrPutTest,
  validateError,
  TestController.updateTest,
);

router.put(
  '/tests/:id',
  validateCreateOrUpdateOrPutTest,
  validateError,
  TestController.replaceTest,
);
//TESTS

//USERS
router.post(
  '/registration',
  validateRegistrationAndLogin,
  validateError,
  UserController.registration,
);
router.post('/login', validateRegistrationAndLogin, validateError, UserController.login);
router.get('/users/:id', authMiddleware, UserController.getUser);
//USERS

module.exports = router;
