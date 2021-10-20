const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};
