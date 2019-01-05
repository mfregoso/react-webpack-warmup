const path = require("path");

module.exports = {
  mode: "development", // or production
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000
  },
  module: {
    rules: [
      // uses an array to define multiple rules
      {
        test: /.js$/, // regex used to find matching filenames
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  }
};
