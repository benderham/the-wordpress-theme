var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('optimize:js', function() {
  return gulp.src(config.scripts.src)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest))
});
