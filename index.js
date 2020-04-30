const express = require("express");
const app = express();
const city = require("./city");
const path = require("path");

app.get("/city", (req, res) => {
  res.json(city);
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
