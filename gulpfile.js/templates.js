const gulp = require("gulp");
const size = require("gulp-size");
const config = require("./config").templates;

function templates(cb) {
  gulp
    .src(config.src)
    .pipe(size({ title: "templates" }))
    .pipe(gulp.dest(config.dest));
  cb();
}

module.exports = templates;
