const express = require("express");
const app = express();
const city = require("./city");

app.get("/city", (req, res) => {
  res.json(city);
});
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Iraq Cities REST API</h1>`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
