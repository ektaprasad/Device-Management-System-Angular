import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { RegisterService } from '../service/register.service';
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}
  myform: FormGroup;
  user = { name: '', email: '', password: '', cpassword: '' };
  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
        ),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6),
      ]),
      cpassword: new FormControl(this.user.cpassword, [
        Validators.required,
        //Validators.apply(this.checkPassword)
      ]),
    });
    //   this.myform = this.formBuilder.group({
    //     'name': ['', Validators.required],
    //     'email': ['', [Validators.required, Validators.email]],
    //     'password': ['', [Validators.required, Validators.minLength(6)]],
    //     'cpassword': ['', Validators.required]
    // }, {
    //     validator: MustMatch('password', 'cpassword')
    // });
  }
  get f() {
    return this.myform.controls;
  }
  registerUser(name, email, password, cpassword) {
    this.submitted = true;
    if (password.value != cpassword.value) {
      this.toastr.error('password mismatch');
    } else {
      this.registerService
        .doRegistration({
          name: name.value,
          email: email.value,
          password: password.value,
        })
        .subscribe(
          (data) => {
            this.router.navigate(['login']);
          },
          (error) => {
            this.toastr.error('Something went wrong');
          }
        );
    }
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
}
