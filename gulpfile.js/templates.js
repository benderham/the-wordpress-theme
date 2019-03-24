var gulp = require("gulp");
var config = require("./config").templates;

function templates(cb) {
  gulp.src(config.src).pipe(gulp.dest(config.dest));
  cb();
}

module.exports = templates;
