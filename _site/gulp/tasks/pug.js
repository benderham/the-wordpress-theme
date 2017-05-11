var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var config = require('../config');

gulp.task('pug', function() {
  return gulp.src(config.pug.src)
  .pipe(plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.pug.dest))
});
