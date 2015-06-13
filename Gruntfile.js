module.exports = function(grunt) {
	
	// Let's set up our 'source' and 'build' folders
	var globalConfig = {
    src: 'app/website-source',
    build: 'app/wordpress/wp-content/themes/the-theme'
  };
	
	// Load all grunt tasks matching the 'grunt-*' pattern
	require('load-grunt-tasks')(grunt);
	
	// measures the time each task takes
  require('time-grunt')(grunt);
	
	// Shall we dance?
	grunt.initConfig({
		globalConfig: globalConfig,
		
		// Creepy perve on the files and watch them changing... giggedy!
		watch: {			
			// Watch for any changes on the Gruntfile
			gruntfile: {
      	files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
    	},
			// Watch for changes in rootImages
			rootImages: {
				files: ['<%= globalConfig.src  %>/root-images/**/*.{jpg,jpeg,png,gif,svg}'],
				tasks: ['newer:copy:rootImages']
			},
			// Watch for changes in themeTemplates
			themeTemplates: {
				files: ['<%= globalConfig.src  %>/theme-templates/**/*.{php,css,html}'],
				tasks: ['newer:copy:themeTemplates']
			},
			// Watch for changes in fonts
			fonts: {
				files: ['<%= globalConfig.src  %>/fonts/**/*.{eot,svg,ttf,woff,woff2}'],
				tasks: ['newer:copy:fonts']
			},
			// Watch for changes in vendor javascript
			vendorScripts: {
				files: ['<%= globalConfig.src  %>/js/vendor/**/*.js'],
				tasks: ['concat:vendorScripts']
			},
			// Watch for changes in main javascript
			mainScript: {
				files: ['<%= globalConfig.src  %>/js/main.js'],
				tasks: ['jshint:mainScript', 'copy:mainScript']
			},
			// Watch for changes in the images folder
			themeImages: {
				files: ['<%= globalConfig.src  %>/images/**/*.{jpg,jpeg,png,gif,svg}'],
				tasks: ['newer:imagemin']
			},
			// Watch for changes to styles
			styles: {
				files: ['<%= globalConfig.src  %>/scss/**/*.{scss,sass}'],
				tasks: ['sass:develop', 'autoprefixer']
			}
			
		}, 
		// end watching you filthy perve
		
		// Let's do some copying!
		copy: {
			// Copy Development & Build
			
			// Favicons and the theme's screenshot
		  rootImages: {
			  files: [{
				  expand: true,
				  cwd: '<%= globalConfig.src  %>/root-images/',
				  src: ['**'], 
				  dest: '<%= globalConfig.build %>/'
				}]
		  },
		  
		  // WordPress Theme Files - single.php, style.css etc
		  themeTemplates: {
			  files: [{
				  expand: true,
				  cwd: '<%= globalConfig.src  %>/theme-templates/',
				  src: ['**'], 
				  dest: '<%= globalConfig.build %>/'
				}]
		  },
		  
		  // Font files
		  fonts: {
			  files: [{
				  expand: true,
				  cwd: '<%= globalConfig.src  %>/fonts',
				  src: ['**'], 
				  dest: '<%= globalConfig.build %>/fonts'
				}]
		  },
		  
		  // Main javascript file
		  mainScript: {
			  files: [{
				  expand: true,
				  cwd: '<%= globalConfig.src  %>/js',
				  src: ['main.js'],
				  dest: '<%= globalConfig.build %>/js/'
			  }]
		  }
					
		}, 
		// end copy
		
		// SASS/CSS Development
		// Compile sass
		sass: {
			develop: {
				options: {
					style: 'expanded',
					//loadPath: require('node-bourbon').includePaths,
          loadPath: require('node-neat').includePaths
				},
				files: {
					'<%= globalConfig.build %>/css/main.css': '<%= globalConfig.src  %>/scss/main.scss'
				}
			}
		},
		// end compilation
		
		// Autoprefixer
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie9', 'ios 6', 'android 4']
			},
			files: {
				expand: true,
				flatten: true,
				src: '<%= globalConfig.build %>/css/*.css'
			}
		},
		// end autoprefixer
		
		// SASS/CSS Build
		// Combine all of our media queries
		cmq: {
			mainCSS: {
	        expand: true,
	        src: '<%= globalConfig.build %>/css/*.css'
	    }
		}, // end combining media queries
		
		// Send our CSS to Jenny Craig
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: '<%= globalConfig.build %>/css/',
		      src: ['*.css', '!*.min.css'],
		      dest: '<%= globalConfig.build %>/css/',
		      ext: '.css'
		    }]
		  }
		},
		// enough weight lost
		
		// Javascript Development
		// Concat vendor/bower scripts
		concat: {
	    options: {
	      separator: ';',
	    },
	    vendorScripts: {
	      src: [
	      	'<%= globalConfig.src  %>/js/vendor/vendor.js'
	      ],
	      dest: '<%= globalConfig.build %>/js/vendor.js',
	    }
	  },
	  // end concat
		
		// Javascript linting using jshint
		jshint: {
			gruntfile: 'Gruntfile.js',
			mainScript: '<%= globalConfig.src  %>/js/main.js'
		}, 
		// end linting
		
		// Javascript Build
		// Javascript minification with uglify
		uglify: {
	    build: {
	      files: {
	        '<%= globalConfig.build %>/js/main.js': ['<%= globalConfig.build %>/js/main.js'],
	        '<%= globalConfig.build %>/js/vendor.js': ['<%= globalConfig.build %>/js/vendor.js']
	      }
	    }
	  }, 
	  // end minification

		// Get images ready for summer with imagemin
		imagemin: {
			themeImages: {
				options: {
					optimizationLevel: 7,
					progressive: true,
					interlaces: true
				},
				files: [{
					expand: true,
					cwd: '<%= globalConfig.src  %>/images/',
					src: ['**/*.{jpg,jpeg,png,gif,svg}'],
					dest: '<%= globalConfig.build %>/images/'
				}]
			}
		},
		// end imagemin
		
		// preview changes live with browserSync!
		browserSync: {
			dev: {
				bsFiles: {
					src: ['<%= globalConfig.build %>/css/main.css', '<%= globalConfig.build %>/js/*.js','<%= globalConfig.build %>/images/**/*.{jpg,jpeg,png,gif,svg}']
				},
				options: {
					proxy: "dev.wordpressproject",
					watchTask: true
				}
			}
		},
		// end browserSync			
	});	
	
	// Development
	grunt.registerTask('default', [
		'newer:copy',
		'sass:develop', 'autoprefixer',
		'jshint',
		'concat:vendorScripts',
		'newer:imagemin',
		'browserSync', 'watch'
	]);
	
	// Build
	grunt.registerTask('build', [
		'copy',
		'sass:develop', 'autoprefixer',
		'jshint',
		'concat:vendorScripts',
		'cmq','cssmin',
		'uglify',
		'imagemin'
	]);
	
};