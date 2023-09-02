const knex = require("knex")(require("../knexfile"));

const getUserList = (req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieveing doctors:${err}`);
    });
};

module.exports = {
  getUserList,
};
