import { Component, OnDestroy } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { ErrMatch } from 'src/app/err-match';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IRegisterCaregiverFetch, RDX_REGISTER_CAREGIVER_FETCH } from 'src/app/redux/register-caregiver/actions';
import { getRegisterCareGiverFetchError400ErrorsKeys, getRegisterCareGiverFetchError400ErrorsValue, getRegisterCaregiverFetchError422, getRegisterCareGiverIsFetch, getRegisterCareGiverIsFetchError422, getRegisterCareGiverIsFetchSuccess } from 'src/app/redux/register-caregiver/selectors';

@Component({
  selector: 'app-register-caregiver',
  templateUrl: './register-caregiver.component.html',
  styleUrls: ['./register-caregiver.component.css']
})
export class RegisterCaregiverComponent implements OnDestroy {
  errMatch: ErrMatch;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  city: string;
  phoneNumber: string;
  course: string | null;
  passed: boolean;
  email: string;
  password: string;

  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  dateOfBirthFormControl: FormControl;
  cityFormControl: FormControl;
  phoneNumberFormControl: FormControl;
  courseFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;

  firstNameError: Observable<any>;
  lastNameError: Observable<any>;
  dateOfBirthError: Observable<any>;
  cityError: Observable<any>;
  phonenumberError: Observable<any>;
  emailError: Observable<any>;
  passwordError: Observable<any>;

  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isFetchError422: SubscriptionLike;
  form: FormGroup;
  constructor(private store: Store, private fb: FormBuilder, private router: Router) {
    this.errMatch = new ErrMatch();
    this.form = fb.group({});

    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = new Date();
    this.city = '';
    this.phoneNumber = '';
    this.course = null;
    this.passed = false;
    this.email = '';
    this.password = '';
    this.firstNameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required
    ]);
    this.dateOfBirthFormControl = new FormControl('', [
      Validators.required
    ])
    this.cityFormControl = new FormControl('', [
      Validators.required
    ]);
    this.phoneNumberFormControl = new FormControl('', [
      Validators.required
    ]);
    this.courseFormControl = new FormControl('', []);
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ])
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("FirstName")).subscribe(res => {
      if (res) {
        this.firstNameFormControl.setErrors({ backend: true });
      }
    });
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("LastName")).subscribe(res => {
      if (res) {
        this.lastNameFormControl.setErrors({ backend: true });
      }
    });
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("DateOfBirth")).subscribe(res => {
      this.dateOfBirthFormControl.setErrors({ backend: true })
    })
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("City")).subscribe(res => {
      if (res) {
        this.cityFormControl.setErrors({ backend: true });
      }
    })
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("PhoneNumber")).subscribe(res => {
      if (res) {
        this.phoneNumberFormControl.setErrors({ backend: true });
      }
    })
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("Email")).subscribe(res => {
      if (res) {
        this.emailFormControl.setErrors({ backend: true });
      }
    })
    this.store.select(getRegisterCareGiverFetchError400ErrorsKeys("Password")).subscribe(res => {
      if (res) {
        this.passwordFormControl.setErrors({ backend: true });
      }
    })
    this.firstNameError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("FirstName"));
    this.lastNameError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("LastName"));
    this.dateOfBirthError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("DateOfBirth"));
    this.cityError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("City"));
    this.phonenumberError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("PhoneNumber"));
    this.emailError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("Email"));
    this.passwordError = this.store.select(getRegisterCareGiverFetchError400ErrorsValue("Password"));

    this.isFetch = this.store.select(getRegisterCareGiverIsFetch);
    this.isFetchSuccess = this.store.select(getRegisterCareGiverIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/please-confirm']);
      }
    })
    this.isFetchError422 = this.store.select(getRegisterCareGiverIsFetchError422).subscribe(res => {
      if (res) {
        this.store.select(getRegisterCaregiverFetchError422).subscribe(err422 => {
          if (err422 == "DuplicateUserName") {
            this.emailFormControl.setErrors({ duplicate: true })
          } else {
            this.passwordFormControl.setErrors({ [err422]: true });
          }
        })
      }
    });
  }
  register() {
    this.store.dispatch<IAschacDispatch<IRegisterCaregiverFetch>>({
      type: RDX_REGISTER_CAREGIVER_FETCH,
      payload: {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        city: this.city,
        phoneNumber: this.phoneNumber,
        course: this.course ? {
          name: this.course,
          passed: false
        } : null,
        email: this.email,
        password: this.password
      }
    });
  }
  ngOnDestroy(): void {
    this.isFetchSuccess.unsubscribe();
    this.isFetchError422.unsubscribe();
  }
}
