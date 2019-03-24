var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
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
}

function vendorScripts(cb) {
  gulp
    .src(config.vendorScripts.src)
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest(config.vendorScripts.dest));

  cb();
}

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
module.exports.vendorScripts = vendorScripts;
module.exports.scriptsMin = scriptsMin;
