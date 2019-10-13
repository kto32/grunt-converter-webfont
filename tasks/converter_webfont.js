/*
 * grunt-converter-webfont
 * https://github.com/kto32/grunt-converter-webfont
 *
 * Copyright (c) 2019 Лаптева Анастасия
 * Licensed under the MIT license.
 */
var convertFont = require('converter-webfont');

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('converter_webfont', 'Конвертор шрифотов из ttf,otf в форматы svg,woff,woff2,eot', function () {
    // Merge task-specific and/or target-specific options with these defaults.

    var options = this.options({
      typeFile: ['svg,eot,woff,ttf'],
    })

    var inputFIle = this.files[0].cwd;
    var outputFile = this.files[0].dest;


    // Warn on and remove invalid source files (if nonull was set).
    if (!grunt.file.exists(inputFIle)) {
      grunt.log.warn('Source file "' + filepath + '" not found.');
      return false;
    } else {
      try {
        if(options.typeFile[0].indexOf('woff2') != -1)
        {
          var done = this.async();
        }
        convertFont(inputFIle, outputFile, options.typeFile[0]);
        grunt.log.writeln('Шрифты созданы в директории: "'+outputFile+'", с типами: "'+options.typeFile[0]+'"');
        grunt.log.writeln('Fonts are created in the directory: "'+outputFile+'", with types: "'+options.typeFile[0]+'"');
      } catch (err) {
        grunt.log.warn('Error to convert: '+err);
      }
    }
    // // Iterate over all specified file groups.
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
  });

};