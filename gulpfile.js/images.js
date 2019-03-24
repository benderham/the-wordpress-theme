const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
const size = require("gulp-size");
const config = require("./config");

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
    .pipe(size({ title: "images" }))
    .pipe(gulp.dest(config.image.dest));
  cb();
}

function favicons(cb) {
  gulp.src(config.favicons.src).pipe(gulp.dest(config.favicons.dest));
  cb();
}

module.exports.images = images;
module.exports.favicons = favicons;
