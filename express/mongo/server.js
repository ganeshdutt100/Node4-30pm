const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const PORT = process.env.PORT || 3000;

const dbURI = "mongodb://localhost:27017/myBlogDB";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Database se connection ho gaya! ✅");
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });

//   Schema
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// routes

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  const newUser = new User({ name: req.body.username });
  await newUser.save();
  res.send("User saved successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
