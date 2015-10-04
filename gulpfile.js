var gulp = require('gulp'),
	handlebars = require('gulp-handlebars'),
	declare = require('gulp-declare'),
	defineModule = require('gulp-define-module'),
	cleanhtml = require('gulp-cleanhtml'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

var uglifyConfigs = {
	mangle : true,
	compress : {
	  drop_console : true
	},
};

/* Paths */
var tepmlatespath = 'templates/*.tpl';
var partialsPath = 'templates/partials/*.tpl';

gulp.task('buildTemplates', function(){
	console.log("Building templates!");
	return gulp.src(tepmlatespath)
		.pipe(cleanhtml())
		.pipe(handlebars())
		.pipe(defineModule('plain'))
		.pipe(declare({
			namespace: 'templates'
		}))
		.pipe(uglify(uglifyConfigs))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('buildPartials', function() {
	console.log("Building partials!");
	return gulp.src(partialsPath)
		.pipe(cleanhtml())
		.pipe(handlebars())
		.pipe(defineModule('plain'))
		.pipe(declare({
			namespace: 'partials'
		}))
		.pipe(uglify(uglifyConfigs))
		.pipe(concat('partials.js'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', [ 'buildTemplates', 'buildPartials']);