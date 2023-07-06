const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@theme': 'src/theme.js',
    '@pages': 'src/pages',
    '@components': 'src/components',
    '@ui': 'src/ui',
    '@services': 'src/services'
  })(config);

  return config;
};
