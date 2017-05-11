var gulp = require('gulp');
var plumber = require('gulp-plumber');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');

gulp.task('scss', function(){
  return gulp.src(config.scss.src)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(scss())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))   
    .pipe(gulp.dest(config.scss.dest))
});