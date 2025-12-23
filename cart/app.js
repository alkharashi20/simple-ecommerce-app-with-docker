const express = require("express");

const app = express();
app.use(express.json());

let cart = [];

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Item added", cart });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(3000, () => {
  console.log("Cart service running on port 3000");
});
