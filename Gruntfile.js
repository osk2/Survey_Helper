module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n  <%= pkg.name %> Ver <%= pkg.version %>\n  <%= grunt.template.today("yyyy-mm-dd") %>\n  https://github.com/osk2/Survey_Helper\n*/\n'
            },
            build: {
                src: 'js/content_script.js',
                dest: 'js/content_script.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};