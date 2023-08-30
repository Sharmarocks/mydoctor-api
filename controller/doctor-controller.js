const knex = require("knex")(require("../knexfile"));

const getDoctorsList = (req, res) => {
  knex("doctors")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieveing doctors:${err}`);
    });
};

module.exports = {
  getDoctorsList,
};
