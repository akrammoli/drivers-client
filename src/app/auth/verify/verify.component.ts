import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Verify } from '../../core/models/verify';
import { AuthService } from '../../core/services/auth.service';
// import { BrowserStorageService } from '../../core/services/browser-storage.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent {
  verifyForm!: FormGroup;
  code = new FormControl(null, [Validators.required]);

  constructor(
    private router: Router,
    //  private browserStorageService: BrowserStorageService,
     private formBuilder: FormBuilder,
     private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.verifyForm = this.formBuilder.group({
      code: this.code,
    });
  }

  submit() {
    if (this.verifyForm.invalid) {
      return;
    }
    let model: Verify = {
      nationalCode : 0,//this.browserStorageService.getSession('ncode').value??0,
      code: this.code.value??"",
    };
    this.authService.verify(model).subscribe((res) => {

      this.router.navigateByUrl('/dashboard');
      // if (this.authService.isAuthUserInRole('touradmin')) {
      //   this.router.navigateByUrl('/admin');
      // } else {
      //   this.router.navigateByUrl('/employee');
      // }
    });
  }
}
