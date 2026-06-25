const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//   res.status(200).send("Hello Auth!");
// });

// Another way
// router.route("/register").get((req, res) => {
//   res.status(200).send("Welcome to Registration!");
// });

router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;
