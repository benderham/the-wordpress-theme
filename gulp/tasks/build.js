var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(cb) {
  runSequence(
    'svg',
    [
      'modernizr',
      'scss',
      'vendor-scripts',
      'scripts',
      'images',
      'favicons',
      'templates'
    ],
    cb
  );
});

gulp.task('build:production', function(callback) {
  runSequence(
    'svg',
    [
      'modernizr',
      'scss',
      'vendor-scripts',
      'scripts',
      'images',
      'favicons',
      'templates'
    ],
    [
      'optimize:css',
      'optimize:js'
    ],
    callback
  );
});