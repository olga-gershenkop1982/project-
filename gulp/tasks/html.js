module.exports = function () {
  $.gulp.task('html:dev', function () {
    return $.gulp.src('source/html/index.html')
      .pipe($.gulp.dest('build'))
      .on('end', $.bs.reload)
    ;
  });

  $.gulp.task('html:build', function () {
    return $.gulp.src('source/html/index.html')
      .pipe($.gulp.dest('build'))

      .pipe($.gp.htmlmin({collapseWhitespace: true}))
      .pipe($.gp.rename('index.min.html'))

      .pipe($.gulp.dest('build'))
    ;
  });
};