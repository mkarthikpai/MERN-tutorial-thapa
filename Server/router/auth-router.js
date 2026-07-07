const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
// const signupSchema = require("../validators/auth-validator");
// const loginSchema = require("../validators/auth-validator");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// router.get("/", (req, res) => {
//   res.status(200).send("Hello Auth!");
// });

// Another way
// router.route("/register").get((req, res) => {
//   res.status(200).send("Welcome to Registration!");
// });

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);

module.exports = router;
