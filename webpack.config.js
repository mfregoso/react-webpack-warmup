const path = require("path");

module.exports = {
  mode: "development", // or production
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  }
};
