const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2> Anasayfa </h2>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2> About </h2>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2> Contact </h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2> Problem... </h2>");
  }
  res.end();
});

server.listen(4000);
