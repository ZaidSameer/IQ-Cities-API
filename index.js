const express = require("express");
const app = express();
const city = [
  {
    id: 1,
    name: "baghdad",
    towns: ["الكرادة", "المنصور", "الشعب"],
  },
  {
    id: 2,
    name: "najaf",
    towns: ["الكوفة", "المشخاب", "المناذرة"],
  },
];

app.get("/city", (req, res) => {
  res.json(city);
  //   res.send("Hola its working");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
