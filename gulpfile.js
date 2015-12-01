var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false
elixir.config.assetsPath = 'assets'
elixir.config.publicPath = 'public'
elixir.config.js.folder = 'js'

elixir(function(mix) {

    mix.browserify('app.js')
	.sass('app.scss')

});

