module.exports = function () {
  $.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel('html:dev', 'styles:dev', 'copy'),
    'server'
  ));
};