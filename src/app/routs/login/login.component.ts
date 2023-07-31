import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { ILoginFetch, RDX_LOGIN_FETCH_CARECONSUMER, RDX_LOGIN_FETCH_CAREGIVER } from 'src/app/redux/login/actions';
import { getLoginFetchError, getLoginIsFetch, getLoginIsFetchCareconsumerSuccess, getLoginIsFetchCaregiverSuccess, getLoginIsFetchError400, getLoginIsFetchErrorLockedOut, getLoginIsFetchErrorNotAllowed } from 'src/app/redux/login/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  email: string
  password: string;

  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  form: FormGroup;

  isFetch: Observable<boolean>;
  isFetchCaregiverSuccess: SubscriptionLike;
  isFetchCareconsumerSuccess: SubscriptionLike;
  isFetchError400: SubscriptionLike;
  isFetchErrorLockedOut: SubscriptionLike;
  isFetchErrorNotAllowed: SubscriptionLike;
  fetchError: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.email = '';
    this.password = '';

    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.form = this.fb.group({});
    this.isFetch = this.store.select(getLoginIsFetch);
    this.isFetchCaregiverSuccess = this.store.select(getLoginIsFetchCaregiverSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/main-caregiver/profile']);
      }
    });
    this.isFetchCareconsumerSuccess = this.store.select(getLoginIsFetchCareconsumerSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/main-careconsumer/profile']);
      }
    });
    this.isFetchError400 = this.store.select(getLoginIsFetchError400).subscribe(res => {
      if (res) {
        this.passwordFormControl.setErrors({ backend: true });
      }
    });
    this.isFetchErrorLockedOut = this.store.select(getLoginIsFetchErrorLockedOut).subscribe(res => {
      if (res) {
        this.passwordFormControl.setErrors({ locked: true });
      }
    });
    this.isFetchErrorNotAllowed = this.store.select(getLoginIsFetchErrorNotAllowed).subscribe(res => {
      if (res) {
        this.passwordFormControl.setErrors({ allowed: true});
      }
    });
    this.fetchError = this.store.select(getLoginFetchError);
  }
  fetchCaregiver() {
    this.store.dispatch<IAschacDispatch<ILoginFetch>>({
      type: RDX_LOGIN_FETCH_CAREGIVER,
      payload: {
        email: this.email,
        password: this.password
      }
    })
  }
  fetchCareconsumer() {
    this.store.dispatch<IAschacDispatch<ILoginFetch>>({
      type: RDX_LOGIN_FETCH_CARECONSUMER,
      payload: {
        email: this.email,
        password: this.password
      }
    })
  }

  ngOnDestroy() {
    this.isFetchCaregiverSuccess.unsubscribe();
    this.isFetchCareconsumerSuccess.unsubscribe();
    this.isFetchError400.unsubscribe();
    this.isFetchErrorLockedOut.unsubscribe();
    this.isFetchErrorNotAllowed.unsubscribe();
  }
}
