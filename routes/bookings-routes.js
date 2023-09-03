const router = require("express").Router();
const bookingsController = require("../controller/bookings-controller");

router
  .route("/")
  .get(bookingsController.bookingList)
  .post(bookingsController.addBooking);

module.exports = router;
