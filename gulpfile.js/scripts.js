const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const size = require("gulp-size");
const config = require("./config");

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
    .pipe(size({ title: "vendorScripts" }))
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
    .pipe(size({ title: "scripts" }))
    .pipe(gulp.dest(config.scripts.dest));

  cb();
}

module.exports.scripts = scripts;
module.exports.vendorScripts = vendorScripts;
module.exports.scriptsMin = scriptsMin;
