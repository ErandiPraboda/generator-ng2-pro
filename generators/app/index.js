'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var name;
module.exports = Generator.extend({
  
 prompting: function () {
    
    this.log(yosay(
      'Welcome to the super-duper ' + chalk.red('generator-ng2-pro') + ' generator!'
    ));

    var prompts = [{
     type: 'checkbox',
     name: 'mainframeworks',
     message:'Would you like AngularJS or JQuery ?',
     choices: [{
       name: 'Angular',
       value: 'includeAngular',
       checked: true
      }, {
       name: 'JQuery',
       value: 'includeJQuery',
       checked: true
      }]
    },
    {
     type: 'checkbox',
     name: 'features',
     message:'What more front-end frameworks would you like ?',
     choices: [{
       name: 'Sass',
       value: 'includeSass',
       checked: true
     }, 
     {
      name: 'Bootstrap',
      value: 'includeBootstrap',
      checked: true
     }, 
     {
      name: 'Modernizr',
      value: 'includeModernizr',
      checked: true
     }]
     },
     {
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
       
    }
    
    ];
   return this.prompt(prompts).then(function (props) {
    this.props = props;
    this.name = props.name;
    
    }.bind(this));
    },

   writing: function () 
   {
        this.fs.copyTpl(
            this.templatePath('eslintignore'),
            this.destinationPath('.eslintignore')
        );

        this.fs.copyTpl(
            this.templatePath('eslintrc.json'),
            this.destinationPath('.eslintrc.json')
        );

        this.fs.copyTpl(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), {
                name: this.name,
                
            }
        );

        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'), {
                appname: this.name
            }
        );

        this.fs.copyTpl(
            this.templatePath('travis.yml'),
            this.destinationPath('.travis.yml')
        );

        this.fs.copyTpl(
            this.templatePath('tsconfig.json'),
            this.destinationPath('tsconfig.json')
        );

        this.fs.copyTpl(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );

        this.fs.copyTpl(
            this.templatePath('karma-shim.js'),
            this.destinationPath('karma-shim.js')
        );

        this.fs.copyTpl(
            this.templatePath('protractor.conf.js'),
            this.destinationPath('protractor.conf.js')
        );

        this.fs.copyTpl(
            this.templatePath('tslint.json'),
            this.destinationPath('tslint.json')
        );

        this.fs.copyTpl(
            this.templatePath('typedoc.json'),
            this.destinationPath('typedoc.json')
        );

        this.fs.copyTpl(
            this.templatePath('typings.json'),
            this.destinationPath('typings.json')
        );

        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
   },
  bower: function()
  {
  var bowerJson = {
                name: this.name, 
                license: 'MIT',
                dependencies: {}  
            };
            bowerJson.dependencies['angular'] = '~1.4.6';
            bowerJson.dependencies['angular-bootstrap'] = '~0.13.4';
            bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
            bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
        
  if (this.includeBootstrap) {
        var bs = 'bootstrap' + (this.includeSass ? '-sass' : '');
        bowerJson.dependencies['bs'] = '~3.3.1';
  }
  if (this.includeModernizr) {
        bowerJson.dependencies['modernizr'] = '~2.8.1';
  }
  if (this.includeAngular) {
        bower.dependencies['angular'] = '~1.3.15';
  }  
  if (this.includeJQuery) {
        bower.dependencies['jquery'] = '~2.1.1';
  }
       this.fs.writeJSON('bower.json', bowerJson);

        this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
  },
 
 application :function()
 {
  var componentJson = {};
  this.fs.writeJSON('app/'+this.name+'/'+this.name+'.component.ts',componentJson);
 
  var componentJson = {};
  this.fs.writeJSON('app/'+this.name+'/'+this.name+'.service.ts',componentJson);

  var componentJson = {};
  this.fs.writeJSON('app/'+this.name+'/'+this.name+'.ts',componentJson);
 },
 


  install: function () {
    this.installDependencies({

    });
  }
});
