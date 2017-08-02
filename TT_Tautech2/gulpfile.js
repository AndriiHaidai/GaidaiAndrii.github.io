var gulp 								= require('gulp'),
		sass 								= require('gulp-sass'),
		concat 							= require('gulp-concat'),
		cssnano             = require('gulp-cssnano'),
		browserSync					= require('browser-sync'),
		del 								= require('del'),
		imagemin						= require('gulp-imagemin'),
		pngquant 						= require('imagemin-pngquant'),
		cache 							= require('gulp-cache'),
		autoprefixer 				= require('gulp-autoprefixer'),
		plugins 						= require('gulp-load-plugins')();

var paths = {
	srcHtml:    './src/index.html',
	srcFavicon: './src/favicon.ico',
	srcFonts:   './src/fonts/*',
	srcSass:   ['./src/blocks/tools/*.scss', './src/blocks/default/*.scss', './src/blocks/**/*.scss'],
	srcJs:      './src/blocks/**/*.js',
	srcImg:    ['./src/Non-functional_images/*.jpg', './src/Non-functional_images/*.png'],
	srcSvg:     './src/img/*.svg',

	destHtml:    './src',
	destFavicon: './src',
	destFonts:   './src/fonts',
	destCss:     './src/css',
	destJs:      './src/js',
	destImg:     './src/img',
	destSvg:     './src/img'
/*
	destHtml:    './dest',
	destFavicon: './dest',
	destFonts:   './dest/Content/fonts',
	destCss:     './dest/Content/css',
	destJs:      './dest/Scripts/js',
	destImg:     './dest/Non-functional_images',
	destSvg:     './dest/Content/img'*/
};


// Copy HTML to target folder
gulp.task('bundleHtml' , function(){
	var buildHtml = gulp.src(paths.srcHtml)
		.pipe(gulp.dest(paths.destHtml));
});

// Copy favicon.ico to target folder
gulp.task('getFavicon' , function(){
	var buildFavicon = gulp.src(paths.srcFavicon)
		.pipe(gulp.dest(paths.destFavicon));
});

// Copy Fonts to target folder
gulp.task('bundleFonts' , function(){
	var buildFonts = gulp.src(paths.srcFonts)
		.pipe(gulp.dest(paths.destFonts));
});

// Assembling .scss files
gulp.task('bundleCss' , function(){
	gulp.src(paths.srcSass)
		.pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
		.pipe(plugins.concat('style.css'))
		.pipe(autoprefixer({browsers: ['last 5 versions', 'IE 8', 'IE 9'], cascade: true }))
		.pipe(gulp.dest(paths.destCss))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Assembling .js files
gulp.task('bundleJs', function() {
	gulp.src(paths.srcJs)
		.pipe(plugins.concat('common.js'))
		.pipe(gulp.dest(paths.destJs))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Assembling Images
gulp.task('bundleImg', function() {
	gulp.src(paths.srcImg)
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest(paths.destImg));
});

// Assembling SVG Images
gulp.task('bundleSvg', function() {
	gulp.src(paths.srcSvg)
	.pipe(gulp.dest(paths.destSvg));
});



gulp.task('watch', function(){
	gulp.watch(paths.srcHtml, browserSync.reload);
	gulp.watch(paths.srcSass, {cwd: './'}, ['bundleCss']);
	gulp.watch(paths.srcJs, {cwd: './'}, ['bundleJs']);
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'src'
			// baseDir: 'dest'
		},
		notify: false
	});
});


/*
gulp.task(
	'default', 
	[
		'browser-sync', 
		'bundleHtml', 
		'getFavicon', 
		'bundleFonts', 
		'bundleCss', 
		'bundleImg', 
		'bundleSvg', 
		'bundleJs', 
		'watch'
	]
);*/
gulp.task(
	'default', 
	[
		'browser-sync', 
		'bundleHtml', 
		// 'getFavicon', 
		// 'bundleFonts', 
		'bundleCss', 
		// 'bundleImg', 
		// 'bundleSvg', 
		'bundleJs', 
		'watch'
	]
);

