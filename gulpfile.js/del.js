const del = require("del");
const config = require("./config");

function clean(cb) {
  del(config.dist + "*");
  cb()
}

module.exports = clean;
