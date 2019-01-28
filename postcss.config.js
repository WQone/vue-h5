module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7'],
    },
    'postcss-px2rem': {
      remUnit: 37.5,
    },
  },
};
