// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-express');
var inject = require('gulp-inject');

gulp.task('server', function () {
  // Start the server at the beginning of the task
  server.run(['index.js']);
});
// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('./assets/styles/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./assets/styles/css/'));
});
// Inject files to index.html
gulp.task('index', function () {
  var target = gulp.src('./views/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./assets/styles/**/*.css'], {read: false});

  return target.pipe(inject(sources))
      .pipe(gulp.dest('./views'));
});
// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./assets/styles/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass','index','watch','server']);