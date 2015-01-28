var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images-opt', function () {
    gulp.src('images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'));
});


gulp.task('default', ['images-opt'], function(){});
