const gulp = require("gulp");
const watch = require("./watch");
const browserSync = require("./browserSync").server;
const scssTask = require("./scss").scssTask;
const scssMin = require("./scss").scssMin;
const images = require("./images");
const scripts = require("./scripts").scripts;
const vendorScripts = require("./scripts").vendorScripts;
const scriptsMin = require("./scripts").scriptsMin;
const templates = require("./templates");

module.exports.default = gulp.series(
  scssTask,
  images,
  scripts,
  vendorScripts,
  templates,
  watch,
  browserSync
);
module.exports.buildProduction = gulp.series(
  scssMin,
  images,
  scriptsMin,
  vendorScripts,
  templates
);
