const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const doctorRoutes = require("./routes/doctor-routes");
const userRoutes = require("./routes/user-routes");
const bookingRoutes = require("./routes/bookings-routes");

app.use("/api/doctors", doctorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
