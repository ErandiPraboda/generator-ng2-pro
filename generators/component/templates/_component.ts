import {Component} from '@angular/core';

@Component({
  selector: '<%= componentName %>',
  template: require('./<%= name %>.html'),
   styles: require('./<%= name %>.scss'),
})
export class <%= className %> {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}