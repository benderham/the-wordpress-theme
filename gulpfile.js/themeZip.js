const gulp = require("gulp");
const size = require("gulp-size");
const zip = require("gulp-zip");
const config = require("./config");

function themeZip(cb) {
  gulp
    .src(config.dist + "/**")
    .pipe(zip("_the_theme.zip"))
    .pipe(gulp.dest("./app/"))
    .pipe(size({ title: "theme" }));
  cb();
}

module.exports = themeZip;
