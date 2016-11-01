module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);

};