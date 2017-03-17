/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    plugins = require('gulp-load-plugins')(),
    rigger = require('gulp-rigger'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith');

var paths = {
    globalSass: './src/blocks/sass/',

    srcSass: ['./src/blocks/sass/*.scss', './src/blocks/**/*.scss'],
    srcJs: './src/blocks/**/*.js',
    srcHtml: './src/blocks/html/index.html',
    srcImg: './src/img/*',
    srcIcon: './src/sprites/icons/*',

    destCss: './src/css',
    destJs: './src/js',
    destImg: './src/img',
    destHtml: './src/index.html',
    destIcon: './src/sprites'
};

//
gulp.task('bundleCss', function () {
    gulp.src(paths.srcSass)
        .pipe(plugins.sassGlobImport())
        .pipe(plugins.sass({
            outputStyle: 'expanded',
            includePaths: [paths.globalSass, 'node_modules/susy/sass']
        }).on('error', plugins.sass.logError))
        .pipe(plugins.concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'IE 8', 'IE 9'],
            cascade: true
        }))
        .pipe(plugins.cssnano())
        .pipe(gulp.dest(paths.destCss))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('rigger', function () {
    gulp.src(paths.srcHtml)
        .pipe(rigger())
        .pipe(gulp.dest('src/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('imgmin', function () {
    gulp.src(paths.srcImg)
        .pipe(imagemin({
        }))
        .pipe(gulp.dest(paths.destImg))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src(paths.srcIcon).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest(paths.destIcon));
});



gulp.task('bundleJs', function () {
    gulp.src(paths.srcJs)
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest(paths.destJs))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('watch', function () {
    gulp.watch(paths.destHtml, browserSync.reload);
    gulp.watch('src/blocks/html/*.html', ['rigger'], browserSync.reload);
    gulp.watch(paths.srcSass, {
        cwd: './'
    }, ['bundleCss']);
    gulp.watch(paths.destImg, {
        cwd: './'
    }, ['imgmin']);
    gulp.watch(paths.destIcon, {
        cwd: './'
    }, ['sprite']);
    gulp.watch(paths.srcJs, {
        cwd: './'
    }, ['bundleJs']);
    gulp.watch('src/html/*.html', ['rigger']);

});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('default', ['browser-sync', 'rigger', 'bundleCss', 'imgmin', 'sprite', 'bundleJs', 'watch']);
