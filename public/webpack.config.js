const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js"
  },
  mode: "development"
};
module.exports = config;