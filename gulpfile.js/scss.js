const gulp = require("gulp");
const scss = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const server = require("browser-sync").create();
const config = require("./config");
const cssnano = require("gulp-cssnano");
const size = require("gulp-size");

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
    .pipe(gulp.dest(config.scss.dest))
    .pipe(server.stream());

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
    .pipe(size({ title: "scss" }));

  cb();
}

module.exports.scssTask = scssTask;
module.exports.scssMin = scssMin;
