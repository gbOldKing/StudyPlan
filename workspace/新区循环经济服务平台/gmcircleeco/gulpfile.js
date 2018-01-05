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


gulp.task('libs', function () {
    gulp.src('libs/**/*')
    .pipe(gulp.dest(app.devPath+'libs'))
    .pipe(gulp.dest(app.prdPath+'libs'))
    .pipe($.connect.reload())
});


gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath))
    .pipe($.connect.reload())
});

/*less编译 压缩*/
gulp.task('less', function () {
    gulp.src(app.srcPath + 'style/*.less')
    .pipe($.less())
    .pipe(gulp.dest(app.devPath + 'style'))
    .pipe($.cssmin())
    .pipe($.rename('main.min.css'))
    .pipe(gulp.dest(app.prdPath + 'style'))
    .pipe($.connect.reload())
});

gulp.task('js', function () {
    gulp.src(app.srcPath + 'script/**/*.js')
    .pipe($.concat('tab.js'))
    .pipe(gulp.dest(app.devPath + 'script'))
    .pipe($.uglify())
    .pipe($.rename('tab.min.js'))
    .pipe(gulp.dest(app.prdPath + 'script'))
    .pipe($.connect.reload())
});


gulp.task('image', function () {
    gulp.src(app.srcPath + 'images/**/*')
    .pipe(gulp.dest(app.devPath +'images'))
    .pipe($.imagemin())
    .pipe(gulp.dest(app.prdPath+'images'))
    .pipe($.connect.reload())
});

gulp.task('build',['libs','html','less','js','image']);

gulp.task('clean', function () {
    gulp.src([app.devPath,app.prdPath])
    .pipe($.clean())
});


gulp.task('serve',['build'],function () {
    $.connect.server({
        root:[app.devPath],
        livereload:true,
        port:8888
    });
    open('http://localhost:8888');
    gulp.watch('libs/**/*',['libs']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'style/*.less',['less']);
    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch(app.srcPath + 'images/**/*',['image']);
});

gulp.task('default',['serve']);




