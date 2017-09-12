/**
 * Author:oldking
 * Created by Administrator on 2017/9/10.
 */

'use strict';
var gulp = require('gulp');

var less = require('gulp-less');

gulp.task('style', function () {
    gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});
gulp.task('serve', function () {
    gulp.watch('css/*.less', ['style']);
});