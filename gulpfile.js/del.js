const del = require("del");
const config = require("./config");

function clean(cb) {
  del(config.templates.dest + "*");
  cb()
}

module.exports = clean;
