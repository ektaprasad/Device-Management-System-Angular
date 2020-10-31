import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    public router: Router,
    private toastr: ToastrService
  ) {}
  myform: FormGroup;
  public res: any = [];
  private token:string;
  user = { name: '', password: '' };
  errorMessage = 'Invalid Credentials';

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        //Validators.minLength(4)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        //Validators.minLength(3)
      ]),
    });
  }
  invalidLogin = false;
  get name() {
    return this.myform.get('name');
  }
  get password() {
    return this.myform.get('password');
  }

  performLogin(name, password) {
    this.loginService
      .doLogin({
        name: name.value,
        password: password.value,
      })
      .subscribe(
        (data) => {
          console.log(data);
          console.log('subscribe')
          this.invalidLogin = false;
          this.loginService.loggedIn.next(true);
          localStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('loggedUser', name);
          var userName = sessionStorage.loggedUser;
          this.loginService.goAuth(data);

          if (!this.invalidLogin) {
            this.router.navigate(['dashboard/getdevice']);
          }
        },
        (error) => {
          console.log(error);
          console.log('error')
          this.invalidLogin = true;
          this.toastr.warning('username or password wrong');
          this.router.navigate(['login']);

        }
      );
  }
  
}
