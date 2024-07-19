import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormControl,  FormGroup,  Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../core/models/login';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  nationalCode = new FormControl(null, [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  rememberMe = new FormControl(false);
  
  constructor(private router: Router,
    private authService:AuthService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nationalCode: this.nationalCode,
      phone: this.phone,
    });
  }

  submit() {
    this.router.navigateByUrl('/auth/verify');
    if (this.loginForm.invalid) {
      return;
    }

    let model: Login = {
      nationalCode: this.nationalCode.value??0,
      phone: this.phone.value??"",
    };
    this.authService.login(model).subscribe((res) => {
      this.router.navigateByUrl('/auth/verify');
    });
  }
}
