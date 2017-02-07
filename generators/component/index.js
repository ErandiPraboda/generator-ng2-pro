'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  
 writing() {
    const name = this.options.name || 'myComponent';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    var path = process.cwd();
    const props = {
      componentName: lowerCase(name),
      className: titleCase(name),
      framework: 'angular2',
      name
    };
    
    this.fs.copy(
      this.templatePath('component.html'),
      this.destinationPath(`${path}/${name}.html`)
      
     
     );
    this.fs.copy(
      this.templatePath('component.ts'),
      this.destinationPath(`${path}/${name}.ts`)
      
      
     );
     
    
    this.fs.copy(
      this.templatePath('component.spec.ts'),
      this.destinationPath(`${path}/${name}.spec.ts`)
     );
   },

  
});
