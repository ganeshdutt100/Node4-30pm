// console.log("Hello Node.js ");
const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("Hello world from my first node server ");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
