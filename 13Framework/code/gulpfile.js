/**
 * Created by Administrator on 2017/8/12.
 */

var gulp = require('gulp');

//注册一个任务
gulp.task('say', function() {
    // 将你的默认的任务代码放在这
    // 复制文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});



gulp.task('copy', function() {
    // 将你的默认的任务代码放在这
    // 复制文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch('src/index.html',['copy']);
  gulp.watch('src/style/*.less',['style']);
});


var less=require('gulp-less');
var cssnano=require('gulp-cssnano');

gulp.task('style', function () {
    gulp.src('src/style/*.less')
        .pipe(less())//less编译成CSS
        .pipe(cssnano())//压缩css
        .pipe(gulp.dest('dist/css'));//复制
});