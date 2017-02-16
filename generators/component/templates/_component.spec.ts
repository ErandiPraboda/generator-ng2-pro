/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {<%= className %>} from './index';

/* beautify ignore:end */

describe('Component: <%= className %>', () => {

    let providers = [];      
    let assert = new Assert <<%= className %>>(<%= className %>, providers);   
  
    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined();
    });
});