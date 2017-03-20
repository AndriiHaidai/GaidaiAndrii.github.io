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


const source = {
  html: './src/index.html',
  sass: ['./src/blocks/globals/*.scss', './src/blocks/**/*.scss'],
  js: './src/blocks/**/*.js',
  img: './src/img/**/*.{jpg,png}',
  svgIco: './scr/img/**/*.svg'
};

const destin = {
  html: './dest',
  css: './dest/css',
  js: './dest/js',
  img: './dest/img',
  svgSprite: './dest/sprite'
};

// HTML
gulp.task('rigger', function() {
  gulp.src(source.html)
  .pipe(plugins.rigger())
  .pipe(gulp.dest(destin.html))
  .pipe(browserSync.reload( {stream: true} ));
});

// Styles
gulp.task('styles' , function(){
  return gulp.src(source.sass)
  // .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sassGlobImport())
  .pipe(plugins.sass({
    outputStyle: 'expanded', 
    includePaths: ['node_modules/susy/sass']
  }).on('error', plugins.sass.logError))
  .pipe(plugins.concat('style.css'))
  .pipe(autoprefixer({browsers: ['last 5 versions', 'IE 9'], cascade: true }))
  // .pipe(plugins.sourcemaps.write())
  .pipe(gulp.dest(destin.css))
  .pipe(browserSync.reload( {stream: true} ));
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
  gulp.watch(destin.img, {cwd: './'}, ['imgmin']);
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


gulp.task('default', ['browser-sync', 'rigger', 'styles', 'imgmin', 'bundleJs', 'watch']);
