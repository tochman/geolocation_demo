const superstatic = require('superstatic');
const browserSync = require('browser-sync').create();

browserSync.init({
	server: {
		middleware: [superstatic({stack: 'strict'})]
	},
	port: 3001,
	watch: true,
	files: ['*.html', '*.css', '*.js'],
	ui: false
})