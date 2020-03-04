const nano        = require( 'cssnano' ),
			gulp        = require( 'gulp' ),
			stylus      = require( 'gulp-stylus' ),
			postcss     = require( 'gulp-postcss' ),
			jeet        = require( 'jeet' ),
			nib         = require( 'nib' ),
			rupture     = require( 'rupture' );


gulp.task('app', () => {

	const processors = [
		nano
	];

	return gulp.src('./stylus/App.styl')
		.pipe(stylus({
			use: [
				jeet(),
				nib(),
				rupture()
			]
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl',  gulp.series('app'));
});