const webpack = require("webpack");

module.exports = function() {
  // Default to API if env variable not set
  const appTarget = process.env.REACT_APP_MEMORY_STORE ? "memory" : "api";

  return {
    webpack: {
      plugins: [
        // https://webpack.js.org/plugins/normal-module-replacement-plugin/
        new webpack.NormalModuleReplacementPlugin(
          /(.*)APP_TARGET-(\.*)/,
          function(resource) {
            resource.request = resource.request.replace(
              /APP_TARGET-/,
              `${appTarget}-`
            );
          }
        )
      ]
    }
  };
};