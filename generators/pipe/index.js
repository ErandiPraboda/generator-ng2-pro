'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({

writing: function () {
   this.fs.copyTpl(
      this.templatePath('_pipe.ts'),
      this.destinationPath(`${path}/${name}.ts`),
      { 
        
        pipename:name,
        pipenameClass : titleCase(name),
     
       }
    );
     this.fs.copyTpl(
      this.templatePath('_pipe.spec.ts'),
      this.destinationPath(`${path}/${name}.spec.ts`),
      { 
        pipenameClass : titleCase(name),
      }
    );
  }
});
