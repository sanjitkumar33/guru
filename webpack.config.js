const Dotenv = require('dotenv-webpack');

module.exports = {
    // Other webpack configuration options...
    module: {
      rules: [
        // Other rules...
        {
         test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/', // Output directory for the images
              },
            },
          ],
        },
      ],
    },
    };
    