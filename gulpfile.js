const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoprefiexer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const imagemin = require('gulp-imagemin')
const del = require('del')
const webserver = require('gulp-webserver')

gulp.task('css', function () {
  return gulp
    .src('./src/css/*.css')
    .pipe(autoprefiexer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('sass', function () {
  return gulp
    .src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefiexer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify(
      
    ))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('html', function () {
  return gulp
    .src('./src/pages/*.html')
    .pipe(fileinclude({
      prefix: '!!',
      basepath: './src/components'
    }))
    .pipe(htmlmin({
      removeComments: true,
      removeEmptyAttributes: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./dist/pages'))
})
gulp.task('html2', function () {
  return gulp
    .src('./src/components/*.html')
    // .pipe(fileinclude({
    //   prefix: '!!',
    //   basepath: './src/components'
    // }))
    .pipe(htmlmin({
      removeComments: true,
      removeEmptyAttributes: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./dist/components'))
})

gulp.task('image', function () {
  return gulp
    .src('./src/images/**')
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 7
    }))
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('video', function () {
  return gulp
    .src('./src/videos/**')
    .pipe(gulp.dest('./dist/video'))
})

gulp.task('audio', function () {
  return gulp
    .src('./src/audios/**')
    .pipe(gulp.dest('./dist/audio'))
})

gulp.task('lib', function () {
  return gulp
    .src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
})

gulp.task('data', function () {
  return gulp
    .src('./src/data/**')
    .pipe(gulp.dest('./dist/data'))
})

gulp.task('del', function () {
  return del('./dist')
})

gulp.task('watch', function () {
  gulp.watch('./src/css/*.css', gulp.series('css'))
  gulp.watch('./src/sass/*.sass', gulp.series('sass'))
  gulp.watch('./src/js/*.js', gulp.series('js'))
  gulp.watch('./src/pages/*.html', gulp.series('html'))
  gulp.watch('./src/lib/**', gulp.series('lib'))
  gulp.watch('./src/data/**', gulp.series('data'))
  gulp.watch('./src/images/**', gulp.series('image'))
  gulp.watch('./src/videos/**', gulp.series('video'))
  gulp.watch('./src/audios/**', gulp.series('audio'))
  gulp.watch('./src/components/**', gulp.series('html2'))
})

gulp.task('webserver', function () {
  return gulp
    .src('./dist')
    .pipe(webserver({
      host: 'localhost',
      port: 18,
      open: './pages/index.html',
      livereload: true,
      proxies: [
        {
          source: '/server',
          target: 'http://localhost:80/server/'
        }
      ]
    }))
})

gulp.task('default', gulp.series(
  'del',
  gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data','html2'),
  'webserver',
  'watch'
))