// global.userName = "avneesh";
// res.render();
// EJS  = Embedded javaSCript Template Engine
const express = require("express");
const app = express();

app.use(express.json());

app.set("view engine", "ejs");

const PORT = 3000;

app.get("/", (req, res) => {
  const userName = "Avneesh"; // db
  res.render("index", { name: userName, age: 22 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
