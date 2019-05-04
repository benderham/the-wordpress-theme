const gulp = require("gulp");
const exec = require("gulp-exec");
const config = require("./config");

function scripts(cb) {
  gulp
    .src(config.scripts.src)
    .pipe(exec(`parcel build ${config.scripts.src} --out-dir ${config.scripts.dest} --no-minify`));
  cb();
}

function scriptsMin(cb) {
  gulp
    .src(config.scripts.src)
    .pipe(exec(`parcel build ${config.scripts.src} --out-dir ${config.scripts.dest}`));
  cb();
}

module.exports.scripts = scripts;
module.exports.scriptsMin = scriptsMin;
