"use strict";

var g = require('gulp'),
    sass = require('gulp-sass'),
    cleaner = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    jsmin = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    usemin = require('gulp-usemin'),
    browserSync = require('browser-sync'),
    sassLint = require('gulp-sass-lint'),
    jsHint = require('gulp-jshint'),
    jsHintStylish = require('jshint-stylish'),
    autoPrefixer = require('gulp-autoprefixer'),
    useminJpg = require('imagemin-mozjpeg');

g.task('watch', function() {

  browserSync.init({proxy: "localhost/Server"});

  g.watch('./src/assets/scss/**/*.scss', ['sass']);
  g.watch('./src/assets/js/**/*.js', ['jsHint']);

  g.watch('./src/**/*').on('change', browserSync.reload);

});

g.task('browser-reload', function () {
  return browserSync.reload();
});

g.task('sass', ['sassLint'], function(){
 return g.src('./src/assets/scss/build/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(g.dest('./src/assets/'))
    .pipe(browserSync.reload({
      stream: true
    }));

});

g.task('sassLint', function(){
  return g.src('./src/assets/scss/**/*.scss')
    .pipe(sassLint({
      options: {
           formatter: 'stylish',
           'merge-default-rules': true
       },
       rules: {
         'indentation': 0,
         'property-sort-order':1,
         'space-before-brace':0,
         'no-color-literals':1,
         'no-color-keywords':1,
         'space-after-colon':1,
         'no-empty-rulesets':0,
         'single-line-per-selector':0,
         'no-important':0,
         'no-url-protocols':0,
         'no-url-domains':0,
         'force-element-nesting':0,
         'no-qualifysrc/ing-elements':0,
         'no-ids':0
       }
       }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

g.task('jsHint', function(){
  return g.src('./src/assets/js/build/**/*.js')
  .pipe(jsHint())
  .pipe(jsHint.reporter(jsHintStylish));
})

g.task('clean-dist', function(){
  return g.src('./dist')
  .pipe(cleaner());
});

g.task('dist', ['clean-dist'],function(){

    g.src('./src/assets/scss/build/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(autoPrefixer({browsers:['last 5 versions'], cascade: true}))
   .pipe(g.dest('./dist/assets/'));

   g.src(['./src/assets/img/**/*'])
   .pipe(imagemin([imagemin.optipng(),imagemin.svgo(), useminJpg()]))
   .pipe(g.dest('./dist/assets/img'));

  g.src(['./src/**/*.php','./src/**/*.html'])
  .pipe(usemin({'js':[jsmin]}))
  .pipe(g.dest('./dist'));

  g.src(['./src/assets/font/**/*.otf','./src/assets/font/**/*.woff','./src/assets/font/**/*.ttf'])
  .pipe(g.dest('./dist/assets/font'));

})

