module.exports = function () {
  $.gulp.task('server', function() {
    $.bs.init({
      server: {baseDir: 'build'},
      browser: "firefox"
    });

    $.gulp.watch('source/html/**/*.html', $.gulp.series('html:dev'));
    $.gulp.watch('source/sass/**/*.{scss,sass}', $.gulp.series('styles:dev'));
  });
};