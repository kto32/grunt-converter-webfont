# grunt-converter-webfont

> Font converter from ttf, otf to svg, woff, woff2, eot formats

## Readme
[RU](https://github.com/kto32/grunt-converter-webfont/blob/master/README_RU.md)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-converter-webfont --save-dev

npm install git://github.com/kto32/grunt-converter-webfont --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-converter-webfont');
```

## The "converter_webfont" task

### Overview
In your project's Gruntfile, add a section named `converter_webfont` to the data object passed into `grunt.initConfig()`.

```js
module.exports = function(grunt) {

  grunt.initConfig({
    converter_webfont: {
      cwebfont: {
          options: {
              typeFile: ['svg,eot,ttf,woff'],
          },
          files: [{
              cwd: 'pathIn',
              dest: 'pathTo'
          }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-converter-webfont');

  grunt.registerTask('default', ['converter_webfont']);
  
};

```

### Options

#### options.typeFile
Type: `String`

Default value: `svg,ttf,eot,woff`

Specify formats separated by commas, possible formats: `svg,ttf,eot,woff,woff2`. 

> When using woff2, the script will work out a little longer due to compression.

#### files.cwd
Type: `String`

Required: `true`

The path to the folder with fonts in the ttf, otf format. Files of other formats in the folder are ignored.

#### files.dest
Type: `String`

Required: `true`

The path to save the result.


## Release History
_(v.0.0.0)_

_(v.1.0.0)_
