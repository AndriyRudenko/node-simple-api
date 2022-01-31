require("dotenv").config();

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const url = require("url");

const mainData = fs.readFileSync(
  `${__dirname}/dev-data/main-data.json`,
  "utf-8"
);
parcedData = JSON.parse(mainData);

const server = http.createServer((req, res) => {
  res.end();
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port: ${port} `);
});
