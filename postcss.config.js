module.exports = {
  parser: require('postcss-comment'),
  'plugins': [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-custom-media'),
    require('postcss-simple-vars'),
    require('postcss-preset-env')({
      stage: 0,
      browsers: ['last 2 versions'],
      features: {
        'nesting-rules': true
      }
    }),
    require('cssnano')({
      preset: 'default',
    })
  ],
}
