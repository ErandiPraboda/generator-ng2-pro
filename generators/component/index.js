'use strict';
var path = require('path');
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
module.exports = Generator.extend({
    writing: function() 
     {
    const component = this.options.name || 'myComponent';
    const name = component +'.component';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    var path = process.cwd();
    const className = titleCase(component)+ 'Component'
    
    this.fs.copyTpl(
      this.templatePath('_component.html'),
      this.destinationPath(`${path}/${component}/${name}.html`),
      {
         componentName : lowerCase(className),
      }
     
     );
    this.fs.copyTpl(
      this.templatePath('_component.ts'),
      this.destinationPath(`${path}/${component}/${name}.ts`),
      { 
        name :name,
        className :className,
        selector: component 
      }
    );
     
    
    this.fs.copyTpl(
      this.templatePath('_component.spec.ts'),
      this.destinationPath(`${path}/${component}/${name}.spec.ts`),
       {
        
        className :className,
        name: name 
       }
     );

    this.fs.copyTpl(
      this.templatePath('_component.scss'),
      this.destinationPath(`${path}/${component}/${name}.scss`)
     );
    mkdirp.sync(`${path}/${component}/shared`);
   
    
 
     }

});
