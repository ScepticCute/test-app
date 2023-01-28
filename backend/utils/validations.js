const { check, validationResult } = require("express-validator");

/* ----> USER VALIDATION <---- */
module.exports.validateRegistrationAndLogin = [
  check('email').isEmail().withMessage('Введите корректный e-mail.'),

  check('password')
    .isLength({ min: 8 })
    .withMessage('Пароль должен содержать как минимум 8 символов.')
    .matches(/\d/)
    .withMessage('Пароль должен содержать как минимум одну цифру.'),
];
/* ----> USER VALIDATION <---- */


/* ----> TEST VALIDATION <---- */
module.exports.validateCreateOrUpdateOrPutTest = [
  check('body').isLength({min: 12}).withMessage('Контент в посте должен содержать как минимум 12 символов.'),
  check('title').isLength({min: 3}).withMessage('Название должно содержать как минимум 3 символа.')
]
/* ----> TEST VALIDATION <---- */

/* ----> ERROR CHECKER <---- */
module.exports.validateError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
/* ----> ERROR CHECKER <---- */
