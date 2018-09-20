import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-basic',
  templateUrl: 'login-basic.component.html',
  styleUrls: ['login-basic.component.scss']
})
export class LoginBasicComponent implements OnInit {
  ngOnInit() {}

  onLogin() {}
}

export const LoginBasicData = {
  name: 'Login'
};
