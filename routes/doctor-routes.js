const router = require("express").Router();
const doctorController = require("../controller/doctor-controller");

router
  .route("/")
  .get(doctorController.getDoctorsList)
  .post(doctorController.addDoctor);

router.route("/:id").get(doctorController.findOneDoctor);

module.exports = router;
