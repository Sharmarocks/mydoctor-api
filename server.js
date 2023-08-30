const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
// const cors = require("cors");
// app.use(cors());

const doctorRoutes = require("./routes/doctor-routes");

app.use("/api/doctors", doctorRoutes);

app.get("/", (req, res) => {
  console.log("Welcome to the server");
  res.send("Welcome to the serverrrr");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
