const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const directory = "/" + (process.env.STATIC_DIR || "public");
app.use(express.static(__dirname + directory));

const pathToIndex = path.join(__dirname, directory, "index.html");

const indexContent = fs.readFileSync(pathToIndex, "utf8");

app.get("/*", function (req, res) {
  res.send(indexContent);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Trackdechets website listening on", port);
});
