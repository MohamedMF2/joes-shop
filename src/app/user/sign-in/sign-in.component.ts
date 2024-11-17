import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credietials: IUserCredentials = {
    email: '',
    password: ''
  };

  signInError: boolean = false;

  constructor(private router: Router, private userSvc: UserService) { }

  signIn() {
    this.signInError = false;
    this.userSvc.signIn(this.credietials).subscribe({
      next: () => {
        this.router.navigate(['/catalog']);
      },
      error: () => {
        this.signInError = true;
      }
    })
  }

}
