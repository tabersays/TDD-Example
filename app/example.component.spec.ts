/**
 * Created by taber.fitzgerald on 10/3/16.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ExampleComponent } from './example.component';

describe('The example component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent]
    });
  });

  it('should display login', () => {
    let exampleComponentFixture = TestBed.createComponent(ExampleComponent);
    exampleComponentFixture.detectChanges();
    let text = exampleComponentFixture.debugElement.query(By.css('.login')).nativeElement.innerText;
    expect(text).toEqual('Log in?');
  });
  it('should display sign up', () => {
    let exampleComponentFixture = TestBed.createComponent(ExampleComponent);
    exampleComponentFixture.detectChanges();
    let text = exampleComponentFixture.debugElement.query(By.css('.signup')).nativeElement.innerText;
    expect(text).toEqual('Sign up?');
  });
  it('should display welcome', () => {
    let exampleComponentFixture = TestBed.createComponent(ExampleComponent);
    //we are grabbing an instance of the component so we can modify the state
    let componentInstance = exampleComponentFixture.componentInstance;
    //we are making this true so we can test other parts of the app
    componentInstance.isLoggedIn = true;
    exampleComponentFixture.detectChanges();
    //grab text like before
    let text = exampleComponentFixture.debugElement.query(By.css('.welcome')).nativeElement.innerText;
    //grab these objects to make sure they do not exist
    let signUpDiv = exampleComponentFixture.debugElement.query(By.css('.signup'));
    let loginDiv = exampleComponentFixture.debugElement.query(By.css('.login'));
    //check for welcome text
    expect(text).toEqual('Welcome!');
    //ensure that the login and signup are gone.
    expect(signUpDiv).toBeFalsy();
    expect(loginDiv).toBeFalsy();
  })
});
