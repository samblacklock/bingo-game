const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const vueify = require('vueify');
const connect = require('gulp-connect');
const source = require('vinyl-source-stream');
const watch = require('gulp-watch');

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task('default',['html', 'scripts', 'server', 'watch']);

//Copy static files from html folder to build folder
gulp.task('html', function(){
    return gulp.src('./index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task('scripts', function(){
    return browserify('./js/index.js')
    .transform(vueify)
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

//Start a test server with doc root at build folder and
//listening to 9001 port. Home page = http://localhost:9001
gulp.task('server', function(){
  connect.server({
    root : './dist',
    livereload : true,
    port : 9000
  });
});

gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./js/*.js'], ['scripts']);
});
