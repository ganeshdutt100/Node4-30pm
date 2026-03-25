const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus eius error repellendus dolorem magnam
        odio tenetur consequuntur, sapiente repellat quas ut suscipit vitae eos, adipisci placeat eligendi officia
        doloribus.</p>
</body>

</html>
    `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
