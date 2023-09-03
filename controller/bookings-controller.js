const knex = require("knex")(require("../knexfile"));

//show the bookiing list

const bookingList = (req, res) => {
  knex("bookings")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retreiving bookings ${err}`);
    });
};

//making new appointment

const addBooking = (req, res) => {
  if (!req.body.date || !req.body.time) {
    return res.status(400).send("Please select date and time");
  }

  knex("bookings")
    .insert(req.body)
    .then((result) => {
      return knex("bookings").where({ id: result[0] });
    })
    .then((createdBooking) => {
      res.status(201).json(createdBooking);
    })
    .catch(() => {
      res.status(500).json({ message: `unable to create new booking` });
    });
};

module.exports = {
  bookingList,
  addBooking,
};
