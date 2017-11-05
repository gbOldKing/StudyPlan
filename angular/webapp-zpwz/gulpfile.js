/**
 * Created by Administrator on 2017/11/5.
 */
"use strict";

var gulp=require('gulp');
var $=require('gulp-load-plugins')();
var open=require('open');

var app={
    srcPath:'src/',
    devPath:'build/',
    prdPath:'dist/'
};


gulp.task('lib', function () {
    gulp.src('bower_components/**/*')
    .pipe(gulp.dest(app.devPath+'vendor'))
    .pipe(gulp.dest(app.prdPath+'vendor'))
});


gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath))
});

