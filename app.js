const http = require("http");
const { readFileSync } = require("fs");

const home = readFileSync("./index.html", "utf-8");
const homeStyles = readFileSync("./index.css", "utf-8");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(home);
    res.end();
  } else if (url === "/index.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(5000);
