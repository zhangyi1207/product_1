//写任务的地方
//导入核心模块
let gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass');
//压缩css
// gulp.task('css',()=>{
//     gulp.src('./src/sass/*.css')
//     .pipe(cssnano())
//     .pipe(rename({suffix : '.min'}))
//     .pipe(gulp.dest('./dist/css'));
// })
//sass
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss').pipe(sass({outputStyle:'expanded'}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'));
})
//img
gulp.task('img',()=>{
    gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})
//监听
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/img/*.*',['img']);
})
