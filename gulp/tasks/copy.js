module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src(
      'source/fonts/**/*.{woff,woff2}', 'source/img/**'
      , {base: 'source'})
      .pipe($.gulp.dest('build'))
    ;
  });
};