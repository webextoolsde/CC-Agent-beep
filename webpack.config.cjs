const path = require("path");

const config = {
  mode: "production",
  entry: "./src/dual-ringtone.js",
  output: {
    path: path.resolve(__dirname, "src/build"),
    filename: "dual-ringtone.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
