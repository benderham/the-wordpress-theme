const gulp = require("gulp");
const watch = require("./watch");
const browserSync = require("./browserSync").server;
const { scssTask, scssMin } = require("./scss");
const { images, favicons } = require("./images");
const { scripts, vendorScripts, scriptsMin } = require("./scripts");
const templates = require("./templates");
const themeZip = require("./themeZip");
const clean = require("./del");

module.exports.default = gulp.series(
  clean,
  gulp.parallel(scssTask, images, favicons, scripts, vendorScripts, templates),
  watch,
  browserSync
);

module.exports.buildProduction = gulp.series(
  clean,
  gulp.parallel(scssMin, images, favicons, scriptsMin, vendorScripts, templates)
);

module.exports.buildZip = gulp.series(
  // clean,
  gulp.parallel(
    scssMin,
    images,
    favicons,
    scriptsMin,
    vendorScripts,
    templates
  ),
  themeZip
);
