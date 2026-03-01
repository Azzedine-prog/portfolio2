const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const wait = require('gulp-wait');

// Compile SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('scss/styles.scss')
        .pipe(wait(500))
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('css/'));
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
