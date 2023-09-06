const knex = require("knex")(require("../knexfile"));

//get all doctors

const getDoctorsList = (req, res) => {
  knex("doctors")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieveing doctors:${err}`);
    });
};

// get single doctor

const findOneDoctor = (req, res) => {
  knex("doctors")
    .where({ id: req.params.id })
    .then((doctorsFound) => {
      if (doctorsFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Doctor with ID:${req.params.id} not found` });
      }

      const doctorData = doctorsFound[0];
      res.status(200).json(doctorData);
    })
    .catch(() => {
      res.status(500).json({
        message: `unable to retreive user data for user with id ${req.params.id}`,
      });
    });
};

//add new doctor

const addDoctor = (req, res) => {
  if (
    !req.body.name ||
    !req.body.specialization ||
    !req.body.address ||
    !req.body.bio
  ) {
    return res.status(400).send("Please Provide all the information above");
  }
  knex("doctors")
    .insert(req.body)
    .then((result) => {
      return knex("doctors").where({ id: result[0] });
    })
    .then((createdDoctor) => {
      res.staus(201).json(createdDoctor);
    })

    .catch(() => {
      res.status(500).json({ message: `Unable to create a new doctor` });
    });
};

module.exports = {
  getDoctorsList,
  findOneDoctor,
  addDoctor,
};
