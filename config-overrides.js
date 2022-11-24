const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@theme': 'src/theme',
    '@pages': 'src/pages',
    '@components': 'src/components',
    '@services': 'src/services'
  })(config);

  return config;
};
