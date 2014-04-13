var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('compile-grid', function () {
  gulp.src('./less/grid.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('compile-display', function () {
  gulp.src('./less/display.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['compile-display', 'compile-grid']);
