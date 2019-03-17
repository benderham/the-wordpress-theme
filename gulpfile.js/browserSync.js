const gulp = require("gulp");
const server = require("browser-sync").create();
const config = require("./config").browsersync.development;

function browserSync(cb) {
  server.init(config);
  cb();
}

function browserSyncReload(cb) {
  server.reload();
  cb();
}

module.exports.server = browserSync;
module.exports.reload = browserSyncReload;
