const gulp = require("gulp");
const config = require("./config").watch;
const scssTask = require("./scss").scssTask;
const images = require("./images");
const scripts = require("./scripts").scripts;
const templates = require("./templates");
const reload = require("./browserSync").reload;

function watch(cb) {
  console.log("gulp watch ran");
  gulp.watch(config.sass, scssTask);
  gulp.watch(config.images, gulp.series(images, reload));
  gulp.watch(config.scripts, gulp.series(scripts, reload));
  gulp.watch(config.templates, gulp.series(templates, reload));
  cb();
}

module.exports = watch;
