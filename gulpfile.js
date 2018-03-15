var gulp = require('gulp');
var sass = require('gulp-sass');

var livereload = require('gulp-livereload');
var connect = require('gulp-connect');


gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server();
});


gulp.task('default', ['connect', 'watch']
  // place code for your default task here
);  