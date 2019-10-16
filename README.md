# grunt-converter-webfont

> Конвертер шрифтов из ttf,otf в форматы svg,woff,woff2,eot

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

Указать форматы через запятую, возможные форматы: `svg,ttf,eot,woff,woff2`. 

> При использовании woff2 скрипт будет отрабатывать чуть дольше из за компрессии.

#### files.cwd
Type: `String`

Required: `true`

Путь до папки с шрифтами формата ttf, otf.  Файлы других форматов в папке игнорируются.

#### files.dest
Type: `String`

Required: `true`

Путь для сохранения результата.


## Release History
_(v.0.0.0)_

_(v.1.0.0)_
