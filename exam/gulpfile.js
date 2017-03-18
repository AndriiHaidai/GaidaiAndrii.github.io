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
// const susy         = require('susy');

const source = {
  html: './src/index.html',
  sass: ['./src/blocks/tools/*.scss', './src/blocks/default/*.scss', './src/blocks/**/*.scss'],
  js: './src/blocks/**/*.js'
};

const destination = {
  folder: './src',
  css: './src/css',
  js: './src/js',
};

// Assembling .scss files
gulp.task('styles' , function(){
  return gulp.src(source.sass)
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sassGlobImport())
  .pipe(plugins.sass({
    outputStyle: 'expanded', 
    includePaths: ['node_modules/susy/sass']
  }).on('error', plugins.sass.logError))
  .pipe(plugins.concat('style.css'))
  .pipe(autoprefixer({browsers: ['last 5 versions', 'IE 9'], cascade: true }))
  .pipe(plugins.sourcemaps.write())
  .pipe(gulp.dest(destination.css))
  .pipe(browserSync.reload( {stream: true} ));
});

// Assembling .js files
gulp.task('bundleJs', function() {
  gulp.src(source.js)
  .pipe(plugins.concat('common.min.js'))
  .pipe(gulp.dest(destination.js))
  .pipe(browserSync.reload( {stream: true} ));
});


gulp.task('watch', function(){
  gulp.watch(source.html, browserSync.reload);
  gulp.watch(source.sass, {cwd: './'}, ['styles']);
  gulp.watch(source.js, {cwd: './'}, ['bundleJs']);
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  });
});


gulp.task('default', ['browser-sync', 'styles', 'bundleJs', 'watch']);
