const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const vueify = require('vueify');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const source = require('vinyl-source-stream');
const watch = require('gulp-watch');

gulp.task('default',['html', 'sass', 'scripts', 'server', 'watch']);

gulp.task('html', function(){
    return gulp.src('./index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('./main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());;
});

gulp.task('scripts', function(){
    return browserify('./js/main.js')
    .transform(vueify)
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('server', function(){
  connect.server({
    root : './dist',
    livereload : true,
    port : 9000
  });
});

gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./js/**'], ['scripts']);
  gulp.watch(['./*.scss'], ['sass']);
});
