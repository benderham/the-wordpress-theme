var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var config = require("./config");

function scripts(cb) {
  gulp
    .src(config.scripts.src)
    .pipe(
      babel({
        presets: ["es2015"],
      })
    )
    .pipe(gulp.dest(config.scripts.dest));

  cb();
};

function scriptsMin(cb) {
  gulp
    .src(config.scripts.src)
    .pipe(
      babel({
        presets: ["es2015"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest));

  cb();
}

module.exports.scripts = scripts;
module.exports.scriptsMin = scriptsMin;
