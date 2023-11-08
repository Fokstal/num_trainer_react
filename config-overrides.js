const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, "src/components"),
    "@service": path.resolve(__dirname, "src/service"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@common": path.resolve(__dirname, "src/components/common")
  })
);
