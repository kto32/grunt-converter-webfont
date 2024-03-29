/*
 * grunt-converter-webfont
 * https://github.com/kto32/grunt-converter-webfont
 *
 * Copyright (c) 2019 Лаптева Анастасия
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    converter_webfont: {
      cwebfont: {
        options: {
          typeFile: ['svg,eot,ttf,woff'],
        },
        files: [{
          cwd: 'test/fontOrigin',
          dest: 'test/fontTrans'
        }]
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'converter_webfont', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['converter_webfont']);

};