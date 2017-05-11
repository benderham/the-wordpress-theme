var gulp = require('gulp');
var config = require('../config').favicons;

/**
 * Copy fonts to folder
 */
gulp.task('favicons', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})