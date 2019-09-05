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
//压缩js
gulp.task('js',()=>{
    gulp.src('./src/es5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})
//sass
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss').pipe(sass({outputStyle:'compressed'}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'));
})
//img
gulp.task('img',()=>{
    gulp.src('./dist/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})
//ES6转ES5
gulp.task('es5',()=>{
    gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./src/es5'));
})
//监听
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass']);
    //gulp.watch('./src/img/*.*',['img']);
    gulp.watch('./src/js/*.js',['es5']);
    gulp.watch('./src/es5/*.js',['js']);
})
