require("dotenv").config();

const http = require("http");
const url = require("url");
const ip = require("./getIp");
const fs = require("fs");
const port = process.env.PORT || 3000;

const health = JSON.parse(
  JSON.stringify(fs.readFileSync(`${__dirname}/dev-data/health.json`, "utf-8"))
);

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/ip") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`<p>Local IP:  ${ip.getIPAddress()}</p>`);
  } else if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(health);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("404 Not Found Page");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port: ${port} `);
});
