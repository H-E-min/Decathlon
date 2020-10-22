const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const js = require('gulp-uglify');
const babel = require('gulp-babel');

//复制首页
function fnCopyIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}
//压缩图片
function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
//压缩js
function fnJs(){
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(js())
        .pipe(rename({suffix :'.min'}))
        .pipe(gulp.dest('./dist/js'));
}
//压缩页面
function fnHtml(){
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist/pages'));
}
//编译并压缩sass
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix :'.min'}))
        .pipe(gulp.dest('./dist/css'));
}
//压缩插件的css
function fnCss(){
    return gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'));
}
function fnWatch(){
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/pages/*.html',fnHtml);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/css/*.css',fnCss);
}
exports.copyIndex = fnCopyIndex;
exports.img = fnImg;
exports.js = fnJs;
exports.html = fnHtml;
exports.css = fnSass;
exports.default = fnWatch;
exports.scss = fnCss;
