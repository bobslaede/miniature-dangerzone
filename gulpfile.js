var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var wathcify = require('watchify');
var gutil = require('gulp-util');

gulp.task("watch", function () {

  var b = browserify('./src/index.ts', {
      extensions: ['.ts'],
      debug: true,
      target: 'ES5',
      cache: {},
      packageCache: {},
      fullPaths: true
    });
  var bundler = wathcify(b);

  bundler
    .plugin('tsify', {
      target: 'ES5',
      noImplicitAny: true
    })

  var rebundle = function () {
    gutil.log('Browserify bundle');

    return bundler
      .bundle()
      .pipe(source('output.js'))
      .pipe(buffer())
      .pipe(ngAnnotate())
      .pipe(gulp.dest('./dist/'))
  };

  bundler
    .on('update', rebundle)
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))

  return rebundle();

});
