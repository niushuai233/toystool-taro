const path = require('path')

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  alias: {
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
  },
  defineConstants: {
  },
  mini: {},
  h5: {}
}
