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

    var prompts = [
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
                appname: this.name,
                
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
            this.templatePath('src/*'),
            this.destinationPath('src/')
        );
        this.fs.copyTpl(
            this.templatePath('src/app/*'),
            this.destinationPath('src/app')
        );
        this.fs.copyTpl(
            this.templatePath('config/*'),
            this.destinationPath('config/')
        );
        this.fs.copyTpl(
            this.templatePath('public/css/*'),
            this.destinationPath('public/css')
        );
        this.fs.copyTpl(
            this.templatePath('public/images/*'),
            this.destinationPath('public/images')
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.prod.js'),
            this.destinationPath('webpack.config.prod.js')
        );
        this.fs.copyTpl(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
        this.fs.copyTpl(
            this.templatePath('app-routing.module.ts'),
            this.destinationPath('app-routing.module.ts')
        );
        this.fs.copyTpl(
            this.templatePath('bower.json'),
            this.destinationPath('bower.json')
        );
},
 

  install: function () {
    this.installDependencies({
        yarn :true,
        npm : false,
        bower : false,
        callback: function ()
        {
        console.log('Everything is ready!');
        }

    });
  }
});
