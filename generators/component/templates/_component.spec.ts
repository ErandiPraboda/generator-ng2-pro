
import { TestBed } from '@angular/core/testing';
import { <%= className %> } from './<%= name %>';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [<%= className %>]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(<%= className %>);
    expect(fixture.componentInstance instanceof <%= className %>).toBe(true, 'should create <%= className %>');
  });
});