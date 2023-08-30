const router = require("express").Router();
const doctorController = require("../controller/doctor-controller");

router.route("/").get(doctorController.getDoctorsList);

module.exports = router;
