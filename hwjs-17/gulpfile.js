(function(){'use strict';}());

const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sourcemaps   = require('gulp-sourcemaps');
const uglify       = require('gulp-uglify');
const plugins      = require('gulp-load-plugins')();

const isDevelopement = !process.env.NODE_ENV || process.env.NODE_ENV == 'developement';
// для установления режима 'Production' запускать не "gulp", а "NODE_ENV=production gulp" .
// или комментируем строки с "sourcemaps.init()", "sourcemaps.write()"


var src = {
    folder: './src',
    html: './src/index.html',
    scss: ['./src/blocks/tools/*.scss', './src/blocks/default/*.scss', './src/blocks/**/*.scss'],
    js: ['./src/blocks/human/*.js', './src/blocks/{worker,student}/*.js', './src/blocks/**/*.js']
};

var dest = {
    folder: '.',
    css: './src/css',
    js: './src/js'
};

// Assembling .scss files
gulp.task('bundleCss' , function(){
  gulp.src(src.scss)
    // .pipe(gulpIf(isDevelopement, sourcemaps.init()))  // для разработки - раскомментировать.
    .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
    .pipe(plugins.concat('style.css'))
    .pipe(plugins.autoprefixer({browsers: ['last 5 versions', 'IE 8', 'IE 9'], cascade: true }))
    // .pipe(gulpIf(isDevelopement, sourcemaps.write())) // для разработки - раскомментировать.
    .pipe(gulp.dest(dest.css))
    .pipe(browserSync.reload({ stream: true }));
});

// Assembling .js files
gulp.task('bundleJs', function() {
  gulp.src(src.js)
    // .pipe(plugins.concat('common.js'))
    // .pipe(gulp.dest(dest.js))
    .pipe(plugins.concat('common.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest.js))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('watch', function(){
  gulp.watch(src.html, browserSync.reload);
  gulp.watch(src.scss, {cwd: './'}, ['bundleCss']);
  gulp.watch(src.js, {cwd: './'}, ['bundleJs']);
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  });
});


gulp.task('default', ['browser-sync', 'bundleCss', 'bundleJs', 'watch']);

