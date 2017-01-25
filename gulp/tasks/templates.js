var gulp = require('gulp');
var config = require('../config').templates;

/**
 * Copy fonts to folder
 */
gulp.task('templates', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})