/*global module:false*/
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-compass');
	grunt.initConfig({
		pkg: '<json:package.json>',
		compass: {
			dev: {
				src: 'webroot/css/src',
				dest: 'webroot/css',
				linecomments: true,
				forcecompile: true,
				debugsass: true,
				images: 'webroot/img',
				relativeassets: true
			},
			prod: {
				src: 'webroot/css/src',
				dest: 'webroot/css',
				outputstyle: 'compressed',
				linecomments: false,
				forcecompile: true,
				debugsass: false,
				images: 'webroot/img',
				relativeassets: true
			}
		},
		lint: {
			files: ['grunt.js', 'webroot/js/src/**/*.js']
		},
		concat: {
			dist: {
				src: ['webroot/js/src/**/*.js'],
				dest: 'webroot/js/<%= pkg.name %>.js'
			}
		},
		min: {
			dist: {
				src: ['<config:concat.dist.dest>'],
				dest: 'webroot/js/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			files: ['webroot/sass/*', '<config:lint.files>'],
			tasks: 'lint concat min compass'
		}
	});
	grunt.registerTask('default', 'lint concat min compass:dev');
	grunt.registerTask('prod', 'lint concat min compass:prod');
};
