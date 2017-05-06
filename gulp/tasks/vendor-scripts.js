var gulp = require('gulp');
var config = require('../config').vendorScripts;

/**
 * Copy fonts to folder
 */
gulp.task('vendor-scripts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})