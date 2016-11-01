module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        key: grunt.file.readJSON('key.json'),
        uglify: {
            options: {
                banner: '/*\n  <%= pkg.description %> V<%= pkg.version %>\n  Build Time <%= grunt.template.today("yyyy-mm-dd HH:MM") %>\n  https://github.com/osk2/Survey_Helper\n*/\n'
            },
            build: {
                src: 'js/content_script.js',
                dest: 'js/content_script.min.js'
            }
        },
        jshint: {
            all: ['js/content_script.js']
        },
        zip: {
            '<%= pkg.name %>.zip': ['css/**', 'icons/**', 'js/background.js', 'js/content_script.min.js', 'js/jquery-2.0.3.min.js', 'js/jquery-2.0.3.min.map', 'js/sweet-alert.min.js', 'manifest.json', 'background.html', 'LICENSE']
        },
        webstore_upload: {
            'accounts': {
                'default': {
                    publish: false,
                    client_id: '<%= key.client_id %>',
                    client_secret: '<%= key.client_secret %>'
                }
            },
            'extensions': {
                'survey_helper': {
                    appID: '<%= key.appID %>',
                    zip: '<%= pkg.name %>.zip'
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'manifest.json'],
                commit: false,
                createTag:false,
                push: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-webstore-upload');

    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('pack', ['zip']);
    grunt.registerTask('deploy', ['bump', 'zip', 'webstore_upload']);

};