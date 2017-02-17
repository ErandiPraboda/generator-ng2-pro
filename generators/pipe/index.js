'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({

writing: function () {
    const pipe = this.options.name || 'pipe';
    const name = pipe + '.pipe';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    var path = process.cwd(); 

   this.fs.copyTpl(
      this.templatePath('_pipe.ts'),
      this.destinationPath(`${path}/${name}.ts`),
      { 
        
        
        pipenameClass : titleCase(pipe)+'Pipe',
        pipename : pipe,
       }
    );
     this.fs.copyTpl(
      this.templatePath('_pipe.spec.ts'),
      this.destinationPath(`${path}/${name}.spec.ts`),
      { 
        pipenameClass : titleCase(pipe)+'Pipe',
      }
    );
  }
});
