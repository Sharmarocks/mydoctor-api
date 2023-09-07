const router = require("express").Router();
const bookingsController = require("../controller/bookings-controller");

router
  .route("/")
  .post(bookingsController.addBooking)
  .get(bookingsController.bookingList);

router.route("/:booking_id").delete(bookingsController.deleteAppointment);

module.exports = router;
