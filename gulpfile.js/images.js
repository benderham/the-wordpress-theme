var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var config = require('./config');

function images() {
  return gulp.src(config.image.src)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [imageminPngquant()]
  }))
  .pipe(gulp.dest(config.image.dest))
}

module.exports = images;