import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/common/user-types';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  getStartView = true
  finishedRegistration = false;
  userVisibility = true;

  registrationForm: FormGroup;
  returnUrl: string;
  submited = false;
  getStarted = false;

  formData: any = {
    email: '',
    fullName: '',
    country: '',
    dob: '',
    category: '',
    password: '',
    role: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    // if (this.authService.getUser) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      country: ['', Validators.required],
      dob: [''],
      category: [''],
      password: ['', [Validators.required, Validators.maxLength(8), passwordMustMatch]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(8), passwordMustMatch]],
      agreeTerms: ['', validateAgreeTerms],
      role: ['']
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || environment.home_path;
  }

  get registrationFields() { return this.registrationForm.controls; }

  getStart() {
    this.getStarted = true;

    //! set email to formData
    if (!this.registrationFields.email.errors) {
      this.getStartView = false;
      this.finishedRegistration = true;
      this.formData.email = this.registrationFields.email.value;
    }
  }

  //! to change company view
  selectUser() {
    this.userVisibility = true;
  }

  //! to chsnge user view
  selectCompany() {
    this.userVisibility = false;
  }

  //! to back
  backToGetStart() {
    this.getStartView = true;
    this.finishedRegistration = false
  }

  signUp() {
    this.submited = true;
    this.formData.fullName = this.registrationForm.get('fullName').value;
    this.formData.country = this.registrationForm.get('country').value;
    this.formData.dob = this.registrationForm.get('dob').value;
    this.formData.category = this.registrationForm.get('category').value;
    this.formData.password = this.registrationForm.get('password').value;
    // alert(JSON.stringify(this.registrationForm.value));

    if (!this.registrationForm.invalid) {
      this.userVisibility ? this.formData.role = Role.CUSTOMER : this.formData.role = Role.COMPANY;
      this.authService.register(this.formData).subscribe(regUser => {
        regUser.success ? this.router.navigate([this.returnUrl]) : null;
        return false;
      });
    }

  }

}

//! yet not use
export const validateAgreeTerms: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const agreeTerms = control.parent.get('agreeTerms').value;

  return !agreeTerms ? { validateAgreeTerms: true } : null;
};


//! to password match
export const passwordMustMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const pswd = control.parent.get('password').value;
  const matchingpswd = control.parent.get('confirmPassword').value;

  return (pswd !== matchingpswd) ? { passwordMustMatch: true } : null;
};
