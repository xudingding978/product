// Generated on 2013-08-01 using generator-ember 0.5.9
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // configurable paths
    var yeomanConfig = {
        app: 'app',
        sev: '../app_restAPI/protected/config',
        ignr: '../'
    };
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        yeoman: yeomanConfig,
        manifest: {
            generate: {
                options: {
                    basePath: "<%= yeoman.dist %>",
                    master: ['index.html']
                },
                src: [
                    '*.html',
                    'styles/*.css',
                    'styles/fonts/*',
                    'scripts/*.js',
                    'images/*.{jpg,png,gif}'
                ],
                dest: "<%= yeoman.dist %>/cache.manifest"
            }
        },
        replace: {
            app: {
                options: {
                    variables: {
                        ember: '/bower_components/ember/ember.js'
                    }
                },
                files: [
                    {src: '<%= yeoman.app %>/index.html', dest: '.tmp/index.html'}
                ]

            }
        },
        watch: {
            emberTemplates: {
                files: '<%= yeoman.app %>/templates/**/*.hbs',
                tasks: ['emberTemplates']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            neuter: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['neuter']
            },
            livereload: {
                options:{
                    livereload:LIVERELOAD_PORT
                },
                files: [
                    '.tmp/scripts/*.js',
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,ico}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
//   path: 'http://localhost:<%= connect.options.port %>'
                path: 'http://develop.unleashedsoftware.com:<%= connect.options.port %>'
            }
        },
        clean: {
            options:{
                force:true
            },
            server: '.tmp',
            ignore: {
                files:[{
                        dot: true,
                        src: [
                            '<%=yeoman.ignr %>/.gitignore'
                        ]
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'app/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        concurrent: {
            server: [
                'emberTemplates',
                'compass:server'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        emberTemplates: {
            options: {
                templateName: function(sourceFile) {
                    var templatePath = yeomanConfig.app + '/templates/';
                    return sourceFile.replace(templatePath, '');
                }
            },
            dist: {
                files: {
                    '.tmp/scripts/compiled-templates.js': '<%= yeoman.app %>/templates/{,*/}*.hbs'
                }
            }
        },
        neuter: {
            app: {
                options: {
                    filepathTransform: function(filepath) {
                        return 'app/' + filepath;
                    }
                },
                src: '<%= yeoman.app %>/scripts/app.js',
                dest: '.tmp/scripts/combined-scripts.js'
            }
        }
    });
    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'replace:app',
            'concurrent:server',
            'neuter:app',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

};