var gulp = require("gulp");
var scss = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var config = require("./config");
var cssnano = require("gulp-cssnano");
var size = require("gulp-size");

function scssTask(cb) {
  gulp
    .src(config.scss.src)
    .pipe(
      scss().on("error", err => {
        console.error(err);
      })
    )
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.scss.dest));

  cb();
}

function scssMin(cb) {
  gulp
    .src(config.scss.src)
    .pipe(
      scss().on("error", err => {
        console.error(err);
      })
    )
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(cssnano())
    .pipe(gulp.dest(config.scss.dest))
    .pipe(size());

  cb();
}

module.exports.scssTask = scssTask;
module.exports.scssMin = scssMin;
