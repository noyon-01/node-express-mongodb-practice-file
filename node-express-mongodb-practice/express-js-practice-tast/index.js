const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

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

app.post("/users", (req, res) => {
  console.log("Data is the request:", req.body)
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({success: true, data: newUser, message: "User is added Successfully"})
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
