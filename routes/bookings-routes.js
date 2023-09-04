const router = require("express").Router();
const bookingsController = require("../controller/bookings-controller");

router
  .route("/")
  .post(bookingsController.addBooking)
  .get(bookingsController.bookingList);

module.exports = router;
