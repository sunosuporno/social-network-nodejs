const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const user = require("../models/user");
const isAuth = require("../middleware/is-auth");
const authController = require("../controllers/auth");

router.put(
  "/signup",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return user.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email-address already exists");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty(),
  ],
  authController.signup
);

router.post("/login", authController.login);

router.get("/status", isAuth, authController.getUserStatus);

router.patch(
  "/status",
  isAuth,
  [body("status").trim().not().isEmpty()],
  authController.updateUserStatus
);

module.exports = router;
