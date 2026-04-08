const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log(`Data received : ${username} , ${email} ,  ${password} `);
  res.send(`<h1> Thanks ${username} ,  Registration successful</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
