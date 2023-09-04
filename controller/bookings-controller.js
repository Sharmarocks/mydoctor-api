const knex = require("knex")(require("../knexfile"));

//make a new appointment

const addBooking = (req, res) => {
  // const { userDetails, doctorDetail, date, time } = req.body;
  const { user_id, user_name, user_email, doctor_id, doctor_name, date, time } =
    req.body;

  if (!date || !time) {
    return res.status(400).send("Please select date and time");
  }

  const bookingData = {
    user_id: user_id,
    user_name: user_name,
    user_email: user_email,
    doctor_id: doctor_id,
    doctor_name: doctor_name,
    booking_datetime: new Date(`${date}T${time}:00Z`),
  };

  knex("bookings")
    .insert(bookingData)
    .returning("*")
    .then((createdBooking) => {
      if (createdBooking.length > 0) {
        res.status(201).json(createdBooking[0]);
      } else {
        res.status(500).json({ message: `unable to create new booking` });
      }
    })
    .catch((err) => {
      console.error("error creating booking", err);
      res.status(500).json({ message: `unable to create new booking` });
    });
};

//show the bookiing list

const bookingList = (req, res) => {
  knex("bookings")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ message: "no bookings found" });
      }

      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retreiving bookings ${err}`);
    });
};

module.exports = {
  addBooking,
  bookingList,
};
