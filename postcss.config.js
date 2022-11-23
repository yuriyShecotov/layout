// var autoprefixer = require('autoprefixer-core');

module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        browsers: "last 2 versions",
        stage: 4
      },
      require('css-mqpacker'),
    ],
  ],
};