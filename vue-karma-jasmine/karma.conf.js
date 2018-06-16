const webpackConfig = require("./webpack.config");

module.exports = config => {
  config.set({
    browsers: ["Chrome"],
    frameworks: ["jasmine"],
    files: ["src/**/*.spec.js"],
    preprocessors: {
      "src/**/*.spec.js": ["webpack", "sourcemap"]
    },
    plugins: [
      // Launchers
      "karma-chrome-launcher",

      // Test Libraries
      "karma-jasmine",

      // Preprocessors
      "karma-webpack",
      "karma-sourcemap-loader"
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
