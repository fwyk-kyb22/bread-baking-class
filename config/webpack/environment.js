const { environment } = require('@rails/webpacker')
var webpack = require('webpack');

environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
      jQuery: 'jquery/src/jquery',
      Toastr: 'toastr'
  })
)

module.exports = environment