var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var size = require('gulp-size');
var cmq = require('gulp-group-css-media-queries');
var config = require('../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(cmq({
      log: true
    }))
    .pipe(cssnano(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});