var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var watch = require('gulp-watch');

gulp.task("typescript", function () {
  return browserify(
    {
      entries: './src/index.ts',
      extensions: ['.ts'],
      debug: true,
      target: 'ES5'
    })
    .plugin('tsify', {
      target: 'ES5',
      noImplicitAny: true
    })
    .bundle()
    .pipe(source('output.js'))
    .pipe(buffer())
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts', ['typescript']);
});
