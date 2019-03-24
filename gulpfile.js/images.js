var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var imageminPngquant = require("imagemin-pngquant");
var config = require("./config");

function images(cb) {
  gulp
    .src(config.image.src)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [imageminPngquant()],
      })
    )
    .pipe(gulp.dest(config.image.dest));
  cb();
}

function favicons(cb) {
  gulp.src(config.favicons.src).pipe(gulp.dest(config.favicons.dest));
  cb();
}

module.exports.images = images;
module.exports.favicons = favicons;
