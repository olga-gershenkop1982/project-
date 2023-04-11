module.exports = function () {
  $.gulp.task('styles:dev', function () {
    return $.gulp.src('source/sass/main.scss')
      .pipe($.gp.plumber())
      .pipe($.gp.sass())

      .on("error", $.gp.notify.onError({
        title: "Style error."
      }))

      .pipe($.gulp.dest('build/css'))
      .pipe($.bs.reload({stream: true}));
  });

  $.gulp.task('styles:build', function () {
    return $.gulp.src('source/sass/main.scss')
      .pipe($.gp.sass())
      .pipe($.gp.postcss([$.autoprefixer()]))
      .pipe($.gp.csso())
      .pipe($.gp.rename('main.min.css'))

      .pipe($.gulp.dest('build/css'))
    ;
  });
};