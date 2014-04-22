// Generated on 2013-08-01 using generator-ember 0.5.9
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
// load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist',
        test: 'test'
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                    'images/*.{jpg,png,gif}',
                    'images/welcomepage/*',
                    'images/defaultbg/*',
                    'images/defaultpic/*',
                    'images/defaultcover/*',
                    'images/adsImages/*'
                ],
                dest: "<%= yeoman.dist %>/cache.manifest"
            }
        },
        shell: {// Task
            multiple: {
                command: [
                    'git add .',
                    'git commit -a -m "ready to pull"',
                    'git checkout develop',
                    'git fetch origin',
                    'git pull origin develop'
                            //         'git push origin develop'
                ].join('&&')
            },
            listFolders: {// Target
                options: {// Options
                    stdout: true
                },
                command: 'ls'
            }

        },
//        gitpull: {// Task
//            multiple: {
//                command: [
//                    'git add .',
//                    'git commit -a -m "ready to pull"',
//                    'git checkout develop',
//                    'git fetch origin',
//                    'git pull origin develop'
//                ].join('&&')
//            }
//        },
        replace: {
            dist: {
                src: '<%= yeoman.app %>/templates/navigator.hbs',
                dest: '<%= yeoman.app %>/templates/navigator.hbs',
                replacements: [{
                        from: /lastidentifie\"\>\d\.\d\-[0-9]{1,500}/g,
                        to: function(matchedWord) {
                            var temp = matchedWord.substring(0, matchedWord.indexOf("-") + 1);
                            var num = matchedWord.substring(matchedWord.indexOf("-") + 1);
                            num = parseInt(num) + 1;
                            return temp + num;
                        }
                    }]
            }
        },
        watch: {
            emberTemplates: {
                files: '<%= yeoman.app %>/templates/**/*.hbs',
                tasks: ['emberTemplates', 'livereload']
            },
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            neuter: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['neuter', 'livereload']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,ico}'
                ],
                tasks: ['livereload', 'buildTest', 'test']
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
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
//   path: 'http://localhost:<%= connect.options.port %>'
                path: 'http://develop.trendsideas.com:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }]
            },
            test: {
                files: [{
                        dot: true,
                        src: [
                            '<%= yeoman.test %>/images/*',
                            '<%= yeoman.test %>/styles/*',
                            '<%= yeoman.test %>/scripts/*'
                        ]
                    }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'  //dont change this file
                //reporterOutput: 'jshintFailFile/jshintAddCollectionController.xml'   //create report for one file
               //reporterOutput: 'jshintFailFile/jshint.xml' 
            },
            all: [
                'Gruntfile.js',
                'app/scripts/views/*.js'
                //jshint to test one file
               //'app/scripts/controllers/AddCollectionController.js'
//                '<%= yeoman.app %>/scripts/{,*/}*.js'
//                '!<%= yeoman.app %>/scripts/vendor/*',
//                'test/spec/{,*/}*.js'
                  // 'dist/scripts/eaebe59d.main.js'                    //whole platform
            ]
        },
        qunit: {
            all: ['test/*.html']
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%= yeoman.app %>/scripts',
                        //       src: '{,*/}*.coffee',
                        dest: '.tmp/scripts',
                        ext: '.js'
                    }]
            },
            test: {
                files: [{
                        expand: true,
                        cwd: 'test/spec',
                        //   src: '{,*/}*.coffee',
                        dest: '.tmp/spec',
                        ext: '.js'
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
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        concat: {
            distcomponent: {
                src: [
                    '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
                    '<%= yeoman.app %>/bower_components/javascriptHelper/browserdetecter.js',
                    '<%= yeoman.app %>/bower_components/jquery/jquery.min.js',
                    '<%= yeoman.app %>/bower_components/handlebars/handlebars-v1.2.1.js',
                    '<%= yeoman.app %>/bower_components/jquery.ui/jquery-ui-1.9.2.custom.min.js',
                    '<%= yeoman.app %>/bower_components/jquery.masonry/jquery.masonry.min.js',
                    '<%= yeoman.app %>/bower_components/bootstrap/bootstrap.min.js',
                    '<%= yeoman.app %>/bower_components/ember/ember.min.js',
                    '<%= yeoman.app %>/bower_components/ember-data-shim/ember-data.min.js',
                    '<%= yeoman.app %>/bower_components/moment/moment.min.js',
                    '<%= yeoman.app %>/bower_components/javascriptHelper/javascriptHelper.js',
                    '<%= yeoman.app %>/bower_components/javascriptHelper/html5ImageCropper.js',
                    '<%= yeoman.app %>/bower_components/wysihtml5/parser_rules/advanced.js',
                    '<%= yeoman.app %>/bower_components/wysihtml5/dist/wysihtml5-0.3.0.js',
                    '<%= yeoman.app %>/bower_components/mousetrap.min.js',
                    '<%= yeoman.app %>/bower_components/starrating/jquery.ratings.js',
                    '<%= yeoman.app %>/bower_components/custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                    '<%= yeoman.app %>/bower_components/dfp.js',
                    '<%= yeoman.app %>/bower_components/countries.js',
                    '<%= yeoman.app %>/bower_components/intro/intro.js'
                ],
                dest: '<%= yeoman.dist %>/scripts/components.js'
            },
                 distmain: {
                src: [
                    '.tmp/scripts/combined-scripts.js'

                ],
                dest: '<%= yeoman.dist %>/scripts/main.js'
            },
            disttemplate: {
                src: [
                    '.tmp/scripts/compiled-templates.js'

                ],
                dest: '<%= yeoman.dist %>/scripts/templates.js'
            },
            distcss: {
                src: [
                    '<%= yeoman.app %>/styles/masonry.css',
                    '<%= yeoman.app %>/styles/bootstrap.css',
                    '<%= yeoman.app %>/styles/font-awesome.min.css',
                    '<%= yeoman.app %>/styles/style.css',
                    '<%= yeoman.app %>/styles/views.css',
                    '<%= yeoman.app %>/styles/profile-css.css',
                    '<%= yeoman.app %>/styles/customstyle.css',
                    '<%= yeoman.app %>/styles/_topnavbar.css',
                    '<%= yeoman.app %>/styles/_footer.css'
                ],
                dest: '<%= yeoman.dist %>/styles/main.css'
            },
            testcomponent: {
                src: [
                    '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
                    '<%= yeoman.app %>/bower_components/javascriptHelper/browserdetecter.js',
                    '<%= yeoman.app %>/bower_components/jquery/jquery.min.js',
                    '<%= yeoman.app %>/bower_components/handlebars/handlebars-v1.2.1.js',
                    '<%= yeoman.app %>/bower_components/jquery.ui/jquery-ui-1.9.2.custom.min.js',
                    '<%= yeoman.app %>/bower_components/jquery.masonry/jquery.masonry.min.js',
                    '<%= yeoman.app %>/bower_components/bootstrap/bootstrap.min.js',
                    '<%= yeoman.app %>/bower_components/ember/ember.min.js',
                    '<%= yeoman.app %>/bower_components/ember-data-shim/ember-data.min.js',
                    '<%= yeoman.app %>/bower_components/moment/moment.min.js',
                    '<%= yeoman.app %>/bower_components/javascriptHelper/javascriptHelper.js',
                    '<%= yeoman.app %>/bower_components/javascriptHelper/html5ImageCropper.js',
                    '<%= yeoman.app %>/bower_components/wysihtml5/parser_rules/advanced.js',
                    '<%= yeoman.app %>/bower_components/wysihtml5/dist/wysihtml5-0.3.0.js',
                    '<%= yeoman.app %>/bower_components/mousetrap.min.js',
                    '<%= yeoman.app %>/bower_components/starrating/jquery.ratings.js',
                    '<%= yeoman.app %>/bower_components/custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                    '<%= yeoman.app %>/bower_components/dfp.js',
                    '<%= yeoman.app %>/bower_components/countries.js',
                    '<%= yeoman.app %>/bower_components/intro/intro.js'

                ],
                dest: '<%= yeoman.test %>/scripts/components.js'
            },
            testmain: {
                src: [
                    '.tmp/scripts/combined-scripts.js'

                ],
                dest: '<%= yeoman.test %>/scripts/main.js'
            },
            testtemplate: {
                src: [
                    '.tmp/scripts/compiled-templates.js'

                ],
                dest: '<%= yeoman.test %>/scripts/templates.js'
            },
            testcss: {
                src: [
                    '<%= yeoman.app %>/styles/masonry.css',
                    '<%= yeoman.app %>/styles/bootstrap.css',
                    '<%= yeoman.app %>/styles/font-awesome.min.css',
                    '<%= yeoman.app %>/styles/style.css',
                    '<%= yeoman.app %>/styles/views.css',
                    '<%= yeoman.app %>/styles/profile-css.css',
                    '<%= yeoman.app %>/styles/customstyle.css',
                    '<%= yeoman.app %>/styles/_topnavbar.css',
                    '<%= yeoman.app %>/styles/_footer.css'
                ],
                dest: '<%= yeoman.test %>/styles/main.css'
            }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
//        uglify: {
//        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css'

                    ]
                }

            },
            test: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/{,*/}*.manifest'
                    ]
                }


            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.{png,jpg,jpeg,ico}',
                        dest: '<%= yeoman.dist %>/images'
                    }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.svg',
                        dest: '<%= yeoman.dist %>/images'
                    }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [{
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: '*.html',
                        dest: '<%= yeoman.dist %>'
                    }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,txt}',
                            '.htaccess',
                            'images/{,*/}*.{webp,gif,ico}',
                            'styles/fonts/*',
                            'images/welcomepage/*',
                            'images/defaultbg/*',
                            'images/defaultcover/*',
                            'images/defaultpic/*'
                        ]
                    }]
            },
            test: {
                files: [{
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.dist %>',
                        dest: '<%= yeoman.test %>',
                        src: [
                            'images/welcomepage/*',
                            'images/defaultbg/*',
                            'images/defaultcover/*',
                            'images/defaultpic/*',
                            'images/*',
                            'styles/fonts/*'
                        ]
                    }]
            }
        },
        concurrent: {
            server: [
                'emberTemplates'


            ],
            test: [
                'emberTemplates'

            ],
            dist: [
                'emberTemplates',
                //'coffee',
                //'compass:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
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
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.renameTask('regarde', 'watch');
    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'neuter:app',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
    grunt.registerTask('test', [
        //     'shell',
        'clean:server',
        'concurrent:test',
        'connect:test',
        'neuter:app',
        'clean:test',
        'concat:testcomponent',
        'concat:testmain',
        'concat:testtemplate',
        'concat:testcss',
        'copy:test',
        //     'mocha'
        'qunit'
    ]);
    grunt.registerTask('build', [
        'clean:dist',
        'replace:dist',
        'useminPrepare',
        'concurrent:dist',
        'neuter:app',
        'concat:distcomponent',
        'concat:distmain',
        'concat:disttemplate',
        'concat:distcss',
        'cssmin',
        //'uglify',
        'copy:dist',
        'rev',
        'usemin',
        'manifest',
        'rev:test'
    ]);
    grunt.registerTask('default', [
        'jshint'
                //  'test',
                //  'shell'
    ]);
    grunt.registerTask('gitcommit', [
        'shell:listFolders'
    ]);
    grunt.registerTask('makePost', 'Make a new post dir.', function(n) {
        if (n === null) {
            grunt.log.warn('Post name must be specified, like makePost:PostNameGoesHere.');
        }

// Run other tasks here
        grunt.task.run('gitcommit');
    });
};
