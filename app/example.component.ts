/**
 * Created by taber.fitzgerald on 10/3/16.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'ts-example',
  template:
    `
      <div *ngIf="!isLoggedIn">
        <div class="login">Log in?</div>
        <div class="signup">Sign up?</div>
      </div>
      <div *ngIf="isLoggedIn">
        <div class="welcome">Welcome!</div>
      </div>
    `
})

export class ExampleComponent {
  isLoggedIn: boolean = false;
}
