module.exports = function(grunt) {
    // 1. All configuration goes here

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true
            },
            target1: ['Gruntfile.js', '*.js']
        }
    });

    grunt.registerTask('default', ['jshint']);

};
