const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/products", (req, res) => {
  const category = req.query.category;
  const brandName = req.query.brandName;
  res.send(`${brandName}, ${category}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
