/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {<%=className%>Component} from './index';

/* beautify ignore:end */

describe('Component: <%=className%>Component', () => {

    let providers = [];      
    let assert = new Assert<<%=className%>Component>(<%=className%>Component, providers);   
  
    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined();
    });
});