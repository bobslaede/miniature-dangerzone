var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var typescript = require('typescriptifier');
var watch = require('gulp-watch');

gulp.task("typescript", function () {
  return browserify({
    entries: './src/index.ts',
    extensions: ['.ts']
  })
    .transform('typescriptifier', {
      ext: '.ts'
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
