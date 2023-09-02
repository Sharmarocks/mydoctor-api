const router = require("express").Router();

const userController = require("../controller/user-controller");

router.route("/").get(userController.getUserList);

module.exports = router;
