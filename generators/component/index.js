'use strict';
var path = require('path');
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
module.exports = Generator.extend({
    writing: function() 
     {
    const name = this.options.name || 'myComponent';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    var path = process.cwd();
    
    this.fs.copyTpl(
      this.templatePath('_component.html'),
      this.destinationPath(`${path}/${name}/${name}.html`),
      {
         componentName : lowerCase(name),
      }
     
     );
    this.fs.copyTpl(
      this.templatePath('_component.ts'),
      this.destinationPath(`${path}/${name}/${name}.ts`),
      { 
        componentName : lowerCase(name),
        className :titleCase(name),
        name: name }
    );
     
    
    this.fs.copyTpl(
      this.templatePath('_component.spec.ts'),
      this.destinationPath(`${path}/${name}/${name}.spec.ts`),
       {
        
        className :titleCase(name),
        name: name 
       }
     );

    this.fs.copyTpl(
      this.templatePath('_component.scss'),
      this.destinationPath(`${path}/${name}/${name}.scss`)
     );
    mkdirp.sync(`${path}/${name}/shared`);
 
     }

});
