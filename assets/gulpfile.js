var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify');

gulp.task('scss', function() {
	gulp.src('scss/style.scss')
		.pipe(sass().on('error', notify.onError(function(error) {
				return 'Error compiling SCSS: ' + error.message;
			})))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cleanCSS({
			roundingPrecision: -1,
			keepSpecialComments: 0,
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('default', ['scss', 'watch']);

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss']);
});
