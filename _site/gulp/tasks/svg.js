var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var config = require('../config');

gulp.task('svg', function() {
  return gulp.src(config.svg.src)
    .pipe(svgSprite(config.svg))
    .pipe(gulp.dest(config.svg.dest))
});