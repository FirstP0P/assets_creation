import express, { json } from "express";
const app = express();
const port = 3001;

app.use(json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// ✅ GET Request - Fetch All Users
app.get("/users", (req, res) => {
  res.json(users);
  console.log("Hello");
});

// ✅ POST Request - Add a New User
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
  console.log("Hello POST");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
