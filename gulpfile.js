var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    shell = require('gulp-shell'),
    connect = require('gulp-connect')

gulp.task('default', ['connect', 'watch'])

gulp.task('watch', function() {
  gulp.watch('lib/sass/*.scss', ['sass'])
  gulp.watch(['content/**/*', 'lib/**/*.rb', 'layouts/**/*', 'Rules', 'nanoc.yaml'], ['nanoc'])
  gulp.watch('./output/**/*', ['livereload'])
})

gulp.task('build', ['clean:sass', 'clean:output', 'sass', 'nanoc'])


gulp.task('nanoc', shell.task([
  'bundle exec nanoc compile'
]))

gulp.task('sass', function () {
    gulp.src('./lib/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./content/css'))
})

gulp.task('connect', function() {
  connect.server({
    root: 'output',
    livereload: true
  })
})

gulp.task('livereload', function () {
  gulp.src('./output/**/*')
    .pipe(connect.reload())
})

gulp.task('clean:sass', function() {
    gulp.src('./content/css', {read: false})
        .pipe(clean({force: true}))
        .pipe(gulp.dest(''))
})

gulp.task('clean:output', function() {
    gulp.src('./output', {read: false})
        .pipe(clean({force: true}))
        .pipe(gulp.dest(''))
})

