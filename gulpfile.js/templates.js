var gulp = require('gulp');
var config = require('./config').templates;

function templates() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
}

module.exports = templates;