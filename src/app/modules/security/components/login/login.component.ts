import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    if (this.authService.isExistsToken('my-token')) {
      this.router.navigateByUrl('/console').then();
    }
  }

  login(): void {
    if (this.email === 'desh@gmail.com' && this.password === '12345') {
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/console').then();
    } else {
      alert('wrong Input');
    }
  }
}





