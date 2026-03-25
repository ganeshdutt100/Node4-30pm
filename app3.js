const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
 <h1>  i am Home page </h1>
    `);
    return res.end();
  } else if (req.url === "/about") {
    res.write(`
 <h1>  i am About page </h1>
    `);
    return res.end();
  } else if (req.url === "/contact") {
    res.write(`
 <h1>i am contact page </h1>
    `);
    return res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
