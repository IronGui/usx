// 引入gulp
var gulp = require('gulp');

// 引入组件
var sass = require('gulp-sass');

// 检查js脚本的任务
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
            // outputStyle: 'compressed',
            includePaths: ['node_modules/susy/sass']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));// dest()写入文件
});