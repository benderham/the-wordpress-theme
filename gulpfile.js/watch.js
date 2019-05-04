const gulp = require("gulp");
const { scssTask } = require("./scss");
const { images, favicons } = require("./images");
const { scripts } = require("./scripts");
const templates = require("./templates");
const config = require("./config").watch;
const reload = require("./browserSync").reload;

function watch(cb) {
  gulp.watch(config.sass, scssTask);
  gulp.watch(config.images, gulp.series(images, reload));
  gulp.watch(config.favicons, gulp.series(favicons, reload));
  gulp.watch(config.scripts, gulp.series(scripts, reload));
  gulp.watch(config.templates, gulp.series(templates, reload));
  cb();
}

module.exports = watch;
