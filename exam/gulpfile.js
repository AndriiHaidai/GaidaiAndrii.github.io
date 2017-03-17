/*jslint node: true */
'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const concat       = require('gulp-concat');
const cssnano      = require('gulp-cssnano');
const browserSync  = require('browser-sync');
const del          = require('del');
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');
const cache        = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
const plugins      = require('gulp-load-plugins')();
const sourcemaps   = require('gulp-sourcemaps');
const gulpIf       = require('gulp-if'); // Это слишком мощная штука для цели ветвления потока от условия.

const isDevelopement = !process.env.NODE_ENV || process.env.NODE_ENV == 'developement';
// для установления режима 'Production' запускать не "gulp", а "NODE_ENV=production gulp" .

const source = {
  html: './src/index.html',
  sass: ['./src/blocks/tools/*.scss', './src/blocks/default/*.scss', './src/blocks/**/*.scss'],
  js: './src/blocks/**/*.js',
};

const destination = {
  folder: './src',
  css: './src/css',
  js: './src/js',
};

// gulp.task('cleaan', function() {
//   return del(destination.folder);
// });

// Cleaning Dest folder
gulp.task('clean', function() {
 return del.sync(destination.folder);
});

// Assembling .scss files
gulp.task('styles' , function(){
  return gulp.src(source.sass)
  // .pipe(gulpIf(isDevelopement, sourcemaps.init()))
  .pipe(sourcemaps.init())
  .pipe(plugins.sass({
    outputStyle: 'expanded', 
    includePaths: ['node_modules/susy/sass']
  }).on('error', plugins.sass.logError))
  .pipe(plugins.concat('style.css'))
  .pipe(autoprefixer({browsers: ['last 5 versions', 'IE 9'], cascade: true }))
  // .pipe(gulpif(isDevelopement, sourcemaps.write()))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(destination.css))
  .pipe(browserSync.reload( {stream: true} ));
});

gulp.task('build', gulp.series('clean', 'styles'));

// Assembling .js files
gulp.task('bundleJs', function() {
  gulp.src(source.js)
      // .pipe(plugins.concat('common.js'))
      // .pipe(gulp.dest(destination.js))
      .pipe(plugins.concat('common.min.js'))
      .pipe(uglify())
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


// gulp.task('default', ['browser-sync', 'styles', 'bundleJs', 'watch']);
gulp.task('default', gulp.series('browser-sync', 'styles', 'bundleJs', 'watch'));

