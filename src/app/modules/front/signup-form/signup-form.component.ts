import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public loginFormHide:boolean;

  constructor() {
    this.loginFormHide = true;
   }

  ngOnInit() {
  }

  public toggleLoginFormHide(): void {
    this.loginFormHide = !this.loginFormHide;
  }

}
