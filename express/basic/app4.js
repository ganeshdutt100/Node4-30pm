const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
// const myMiddleware = (req, res, next) => {
//   console.log("Hello World");
//   next();
// };
// app.use(myMiddleware);

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the API" });
// });
const myMiddleware = (req, res, next) => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    console.log("User is logged in");
    next();
  } else {
    res.send("user not logged in ");
  }
};

app.get("/dashboard", myMiddleware, (req, res) => {
  res.send("Welcome to your dashboard");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
