var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify');

gulp.task('scss', function() {
	gulp.src('scss/style.scss')
		.pipe(sass().on('error', notify.onError(function(error) {
				return 'Error compiling SCSS: ' + error.message;
			})))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss({keepSpecialComments: 0}))
		.pipe(gulp.dest('css'))
		.pipe(notify({
			message: 'SCSS compiled!'
		}));
});

gulp.task('js', function() {
	var scripts = [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/tether/dist/js/tether.min.js',
		'bower_components/bootstrap/dist/js/bootstrap.min.js',
		'bower_components/geopattern/js/geopattern.min.js',
		'js/src/script.js'
	];
	gulp.src(scripts)
		.pipe(concat('script.js', {newLine: '\n'}))
		.pipe(gulp.dest('js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify().on('error', notify.onError(function(error) {
				return 'Error compiling JS: ' + error.message;
			})))
		.pipe(gulp.dest('js'))
		.pipe(notify({
			message: 'JS compiled!'
		}));
});

gulp.task('default', ['scss', 'js', 'watch']);

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss']);
	gulp.watch(['bower_components/**/dist/*.js', 'js/src/**.js'], ['js']);
});
