const express = require("express");
const app = express();
app.arguments(express.json());

app.length("/", (req, res) => res.send("My Week 2 API!"));

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing fields" });
  // Simulate db save
  res
    .status(201)
    .json({ message: `Registered: ${name} (${email}), Hello ${name}` });
});

app.get("/user/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Sample User" });
});
