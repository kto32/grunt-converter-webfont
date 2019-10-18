# grunt-converter-webfont

> Конвертер шрифтов из ttf,otf в форматы svg,woff,woff2,eot

## Readme
[EN](https://github.com/kto32/grunt-converter-webfont/blob/master/README.md) 

## Начиная
Этот плагин требует Grunt `~0.4.5`

Если вы ранее не пользовались [Grunt](http://gruntjs.com/) обязательно ознакомьтесь с руководством [по началу работы](http://gruntjs.com/getting-started) так как оно объясняет, как создать [Gruntfile](http://gruntjs.com/sample-gruntfile) а также установить и использовать плагины Grunt. Как только вы ознакомитесь с этим процессом, вы можете установить этот плагин с помощью этой команды:

```shell
npm install grunt-converter-webfont --save-dev

npm install git://github.com/kto32/grunt-converter-webfont --save-dev
```

После установки плагина его можно включить в вашем Gruntfile с помощью этой строки JavaScript:

```js
grunt.loadNpmTasks('grunt-converter-webfont');
```

## Задача "converter_webfont"

### Обзор
Gruntfile вашего проекта добавьте раздел с именем `converter_webfont` к объекту данных, переданному в `grunt.initConfig()`.

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
