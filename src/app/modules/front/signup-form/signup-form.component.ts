import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  // keeps a track of which form to display
  // between login and signup
  public loginFormHide:boolean;

  constructor() {
    this.loginFormHide = true;
   }

  ngOnInit() {
  }

  /**
   * @description
   * Toggles the boolean value of loginFormHide which
   * results in change of forms between signup and login
   * 
   */
  public toggleLoginFormHide(): void {
    this.loginFormHide = !this.loginFormHide;
  }

}
