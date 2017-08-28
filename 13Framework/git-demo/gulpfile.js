/**
 * Created by Administrator on 2017/8/12.
 */



'use strict';

/*gulp工作流*/
/*1、less编译 压缩 合并*/
/*2、JS合并 压缩 混淆*/
/*3、img复制*/
/*4、HTML压缩*/

var gulp = require('gulp');


/*1、less编译 压缩 合并*/
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
gulp.task('style', function () {
    gulp.src('src/style/*.less')
        .pipe(less())//less编译成CSS
        .pipe(cssnano())//压缩css
        .pipe(gulp.dest('dist/style'))
        .pipe(browserSync.reload({stream:true}))
});

/*2、JS合并 压缩 混淆*/
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('script', function () {
    gulp.src('src/script/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script'))
        .pipe(browserSync.reload({stream:true}))
});

/*3、img复制*/

gulp.task('image', function() {
    gulp.src('src/images/*.{png,jpg,jpeg,gif}')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({stream: true}));
});

/*4、HTML压缩*/
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));//通知浏览器刷新
});


var browserSync = require('browser-sync');
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: ['dist/']
        },
        port: 2017
    }, function (err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    gulp.watch('src/style/*.less', ['style']);
    gulp.watch('src/script/*.js', ['script']);
    gulp.watch('src/images/*.*', ['image']);
    gulp.watch('src/*.html', ['html']);
});


