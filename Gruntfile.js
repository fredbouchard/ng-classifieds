module.exports = function(grunt) {
	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),
 		sass:{
 			dev:{
 				options:{
 					outputStyle: 'expanded'
 				},
 				files:{
 					'css/styles.css' : 'scss/app.scss'
 				}
 			},
 			build:{
 				options:{
 					outputStyle: 'compressed'
 				},
 				files:{
 					'css/styles.css' : 'scss/app.scss'
 				}
 			}
 		},
 		connect:{
 			keepalive:{
 				options:{
 					hostname: 'localhost',
 					port: 8080,
 					keepalive: true,
 					open: "http://localhost:8080/#/classifieds",
 				}
 			}
 		},
 		watch: {
 			build: {
				files: ['components/**/*.*','scripts/**/*.js','scss/**/*.scss','index.html'],
				tasks: ['sass:dev'],
				options:{
		 			livereload: true
		 		}
			}			
 		},
		concurrent:{
			build: {
				tasks: ["connect:keepalive", "watch:build"],
				options:{
					logConcurrentOutput: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-sass');
	 
	grunt.registerTask('serve', ['sass:dev', 'concurrent:build']);
	grunt.registerTask('default', ['sass:build']);

};