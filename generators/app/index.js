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
   writing: function () {
    
    
    this.fs.copy(
      this.templatePath('app/app.component.css'),
      this.destinationPath('app/app.component.css')
    );
    this.fs.copy(
      this.templatePath('app/app.component.html'),
      this.destinationPath('app/app.component.html')
    );
    this.fs.copy(
      this.templatePath('app/app.component.ts'),
      this.destinationPath('app/app.component.ts')
    );
    this.fs.copy(
      this.templatePath('app/app.module.ts'),
      this.destinationPath('app/app.module.ts')
    );
    this.fs.copy(
      this.templatePath('app/app.routes.ts'),
      this.destinationPath('app/app.routes.ts')
    );
     this.fs.copy(
      this.templatePath('app/shared/shared.ts'),
      this.destinationPath('app/shared/shared.ts')
    );
     this.fs.copy(
      this.templatePath('app/shared/shared.service.ts'),
      this.destinationPath('app/shared/shared.service.ts')
    );
    this.fs.copy(
      this.templatePath('app/shared/shared.component.ts'),
      this.destinationPath('app/shared/shared.component.ts')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    ); 
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('tslint.json'),
      this.destinationPath('tslint.json')
    );
    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
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
        
        if (this.includeBootstrap) 
        {
        var bs = 'bootstrap' + (this.includeSass ? '-sass' : '');
        bowerJson.dependencies['bs'] = '~3.3.1';
        }
        if (this.includeModernizr) 
        {
        bowerJson.dependencies['modernizr'] = '~2.8.1';
        }
        if (this.includeAngular) 
        {
        bower.dependencies['angular'] = '~1.3.15';
        }  
        if (this.includeJQuery) 
        {
        bower.dependencies['jquery'] = '~2.1.1';
        }
       this.fs.writeJSON('bower.json', bowerJson);

        this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
  },
 package :function()
 {
       var packageJson = {
                name: this.name, 
                license: 'MIT',
                dependencies: {},
                devDependencies :{} 
            };
       
            packageJson.devDependencies['browser-sync'] = '^2.2.1';
            packageJson.devDependencies['gulp'] = '~3.8.0';
            packageJson.devDependencies['gulp-concat'] ='^2.4.1';
            packageJson.devDependencies['gulp-eslint'] = '^3.0.1';
            packageJson.devDependencies['gulp-foreach'] = '0.0.1';
            packageJson.devDependencies['gulp-load-plugins'] = '^0.8.1';
            packageJson.devDependencies['gulp-rename'] = '^1.2.0';
            packageJson.devDependencies['gulp-sourcemaps'] = '^1.2.2';
            packageJson.devDependencies['gulp-uglify'] = '^1.0.1';
            packageJson.devDependencies['gulp-util'] = '^3.0.1';
            packageJson.devDependencies['jasmine-core'] = '^2.4.0';
            packageJson.devDependencies['jasmine-node'] = '^2.0.0';
            packageJson.devDependencies['jasmine-reporters'] = '^2.2.0';
            packageJson.devDependencies['karma'] = '^1.1.2';
            packageJson.devDependencies['karma-browserstack-launcher'] = '^1.0.1';
            packageJson.devDependencies['karma-chrome-launcher'] = '^1.0.1';
            packageJson.devDependencies['karma-firefox-launcher'] = '^1.0.0';
            packageJson.devDependencies['karma-jasmine'] = '^1.0.2';
            packageJson.devDependencies['karma-junit-reporter'] = '^1.1.0';
            packageJson.devDependencies['karma-ng-scenario'] = '^1.0.0';
            packageJson.devDependencies['karma-sauce-launcher'] = '^1.0.0';
            packageJson.devDependencies['karma-script-launcher'] = '^1.0.0';
            
       this.fs.writeJSON('package.json', packageJson);
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
