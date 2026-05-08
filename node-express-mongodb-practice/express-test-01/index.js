const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("home is comming from express js");
});

app.get("/about", (req, res) => {
  res.send("about is comming from express js");
});

const users = [
  { id: 1, name: "Jhon Dou", email: "jhon@gmail.com" },
  { id: 2, name: "Roni Dou", email: "roni@gmail.com" },
  { id: 3, name: "Bobs Dou", email: "bobs@gmail.com" },
  { id: 4, name: "Lani Dou", email: "lani@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
