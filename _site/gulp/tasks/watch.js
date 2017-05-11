var gulp = require('gulp');
var config = require('../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.sass, ['scss']);
  gulp.watch(config.pug, ['pug']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.templates, ['templates']);
  gulp.watch(config.svg, ['svg']);
});