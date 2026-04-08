const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

// app.get("/products", (req, res) => {
//   const category = req.query.category;
//   const brandName = req.query.brandName;
//   res.send(`${brandName}, ${category}`);
// });

// app.get("/search", (req, res) => {
//   const keyword = req.query.q;
//   //   const limit = req.query.limit;
//   const { pages, sort } = req.query;
//   //   res.send(`Showing top ${limit} result for : ${keyword}`);
//   res.send(`pages ${pages} sort by ${sort}`);
// });

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  res.send(`Register ${username} ${email} ${password}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
