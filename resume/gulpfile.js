/*jslint node: true */
'use strict';

const browserSync  = require('browser-sync');
const pngquant     = require('imagemin-pngquant');
const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const cssnano      = require('gulp-cssnano');
const imagemin     = require('gulp-imagemin');
const plugins      = require('gulp-load-plugins')();
const sass         = require('gulp-sass');
const spritesmith  = require('gulp.spritesmith');

const buffer = require('vinyl-buffer');
const merge  = require('merge-stream');


const source = {
  sassTools: './src/blocks/globals/tools.scss', 
  html: './src/index.html',
  sass: ['./src/libs/**/*.scss', './src/blocks/globals/**/*.scss', './src/blocks/**/*.scss'],
  js: ['./src/libs/**/*.js', './src/blocks/**/*.js'],
  img: './src/img/**/*.{jpg,png}',
  sprite: './src/sprite/icons/*.png'
};

const destin = {
  html: './dest',
  css: './dest/css',
  js: './dest/js',
  img: './dest/img',
  sprite: './src/sprite'
};

// Fonts
// ...
// ...


// HTML
gulp.task('rigger', function() {
  gulp.src(source.html)
  .pipe(plugins.rigger())
  .pipe(gulp.dest(destin.html))
  .pipe(browserSync.reload( {stream: true} ));
});


// Styles
gulp.task('styles', ['sprite'], function() {
  return gulp.src(source.sass)
    // .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sassGlobImport())
    .pipe(plugins.sass({
      outputStyle: 'expanded', 
      includePaths: [source.sassTools, 'node_modules/susy/sass']
    }).on('error', plugins.sass.logError))
    .pipe(plugins.concat('style.css'))
    .pipe(autoprefixer({browsers: ['last 5 versions', 'IE 9'], cascade: true }))
    // .pipe(plugins.sourcemaps.write())
    // .pipe(cssnano())
    .pipe(gulp.dest(destin.css))
    .pipe(browserSync.reload( {stream: true} ));
});


//Sprite
gulp.task('sprite', function() {
  var spriteData = gulp.src(source.sprite).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    imgPath: '../img/sprite.png'
  }));

  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(destin.img));

  var cssStream = spriteData.css
    .pipe(plugins.rename('sprite.scss'))
    .pipe(gulp.dest('./src/blocks/components'));

  return merge(imgStream, cssStream);

});


// Javascript
gulp.task('bundleJs', function() {
  gulp.src(source.js)
  .pipe(plugins.concat('common.min.js'))
  .pipe(gulp.dest(destin.js))
  .pipe(browserSync.reload( {stream: true} ));
});


// Images
gulp.task('imgmin', function () {
  gulp.src(source.img)
  .pipe(imagemin({}))
  .pipe(gulp.dest(destin.img))
  .pipe(browserSync.reload({stream: true }));
});


// Watch
gulp.task('watch', function(){
  gulp.watch(destin.html, browserSync.reload);
  gulp.watch(source.html, ['rigger'], browserSync.reload);
  gulp.watch(source.sass, {cwd: './'}, ['styles']);
  // gulp.watch(destin.img, {cwd: './'}, ['imgmin']);
  gulp.watch(destin.sprite, {cwd: './'}, ['sprite']);
  gulp.watch(source.js, {cwd: './'}, ['bundleJs']);
});


gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: './dest'
    },
    notify: false
  });
});


gulp.task('default', ['browser-sync', 'rigger', 'styles', 'imgmin', 'sprite', 'bundleJs', 'watch']);
