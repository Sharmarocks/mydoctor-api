const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  console.log("Welcome to the server");
  res.send("Welcome to the serverrrr");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
