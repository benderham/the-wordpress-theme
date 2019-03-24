const gulp = require("gulp");
const size = require("gulp-size");
const zip = require("gulp-zip");
const config = require("./config");

function themeZip(cb) {
  console.log("theme size ran");
  gulp
    .src(config.dist + "/**")
    .pipe(zip("the_theme.zip"))
    .pipe(gulp.dest(config.dist + "/../"))
    .pipe(size({ title: "theme" }));
  cb();
}

module.exports = themeZip;
