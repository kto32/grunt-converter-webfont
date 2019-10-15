# grunt-converter-webfont

> Конвертор шрифотов из ttf,otf в форматы svg,woff,woff2,eot

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-converter-webfont --save-dev

npm install git://github.com/kto32/test/tree/master/grunt-converter-webfont --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-converter-webfont');
```

## The "converter_webfont" task

### Overview
In your project's Gruntfile, add a section named `converter_webfont` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  converter_webfont: {
    cwebfont: {
        options: {
            typeFile: [format],
        },
        files: [{
            cwd: 'pathIn',
            dest: 'pathTo'
        }]
    },
  },
});

```

### Options

#### options.typeFile
Type: `String`

Default value: `svg,ttf,eot,woff`

Указать форматы через запятую, возможные форматы: `svg,ttf,eot,woff,woff2` (при использовании woff2 скрипт будет отробатывать чуть дольше из за компрессии).

#### files.cwd
Type: `String`

Required: `true`

Путь до папки с шрифтами формата ttf,otf другие форматы игнорируются в папке

#### files.dest
Type: `String`

Required: `true`

Путь для сохранения результата.


## Release History
_(v.0.0.0)_
