const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/submit", (req, res) => {
  const userData = {
    name: req.body.username,
    email: req.body.useremail,
    message: req.body.message,
  };
  res.render("success", { data: userData });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
