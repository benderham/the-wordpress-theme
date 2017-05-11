var gulp   = require('gulp');
var modernizr = require('gulp-modernizr');
var config = require('../config').modernizr;

gulp.task('modernizr', function() {
  gulp.src(config.src)
    .pipe(modernizr(
      {
        options: config.options,
        tests: config.tests
      }
    ))
    .pipe(gulp.dest(config.dest))
});
