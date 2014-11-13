var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var typescript = require('browserify-typescript');
var watch = require('gulp-watch');

gulp.task("typescript", function () {
  return browserify()
    .add('./src/app.ts')
    .transform(typescript)
    .bundle()
    .pipe(source('output.js'))
    .pipe(buffer())
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts', ['typescript']);
});
