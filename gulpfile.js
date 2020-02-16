'use strict';

var gulp = require('gulp');
var gulPug = require('gulp-pug');
var sass = require('gulp-sass');
var smartgrid = require('smart-grid');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var sftp = require('gulp-sftp');
var uncss = require('gulp-uncss');
var csso = require('gulp-csso');


// Сборка конечного проекта

gulp.task('dist', function() {
    'cleancss',
    'ugli',
    'img-min',
    'html-min'
});




//watch sass/pug
gulp.task('watcher', function () {
  gulp.watch('./sass/**/*.scss', gulp.series ('sass'));
   gulp.watch('pug/*.pug', gulp.series ('pug'));
});







//Build dist js
gulp.task('ugli', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Build dist css
gulp.task('cleancss', function () {
    return gulp.src('css/*.css')
        .pipe(csso())
        .pipe(uncss({
                html: ['index.html']
            }))
        .pipe(gulp.dest('dist/css'));
});

//Build dist html-min

gulp.task('html-min', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

//Build dist img-min

gulp.task('img-min', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);









 //Build sass/autoprefixer

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
    .pipe(gcmq())
    .pipe(gulp.dest('./css'));
});

//pug

gulp.task('pug', function() {
  return gulp.src("./pug/*.pug")
       .pipe(gulPug({
        pretty: true
        }))
      .pipe(gulp.dest("./"));

});








 //delete dist
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});


//delete node_modules
gulp.task('node', function () {
    return gulp.src('node_modules/', {read: false})
        .pipe(clean());
});



// Smart-grid

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./sass/', settings);





//host для заливки всех файлов в менеджер файлов хостинга
gulp.task('sftp', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: 'levazik.ru',
            user: 'levazik ',
            pass: '0000',
            remotePath: 'Путь хоста'
        }));
});