import { Component, OnDestroy } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IRegisterCareconsumerFetch, RDX_REGISTER_CARECONSUMER_FETCH } from 'src/app/redux/register-careconsumer/actions';
import { getRegisterCareConsumerFetchError400ErrorsKeys, getRegisterCareConsumerFetchError400ErrorsValue, getRegisterCareConsumerIsFetchSuccess } from 'src/app/redux/register-careconsumer/selectors';

@Component({
  selector: 'app-register-careconsumer',
  templateUrl: './register-careconsumer.component.html',
  styleUrls: ['./register-careconsumer.component.css']
})
export class RegisterCareconsumerComponent implements OnDestroy {
  form: FormGroup;

  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  addressOne: string;
  addressTwo: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;

  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  dateOfBirthFormControl: FormControl
  addressOneFormControl: FormControl;
  addressTwoFormControl: FormControl;
  zipCodeFormControl: FormControl;
  cityFormControl: FormControl;
  phoneNumberFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;

  firstNameError: Observable<any>
  lastNameError: Observable<any>;
  dateOfBirthError: Observable<any>;
  addressOneError: Observable<any>;
  addressTwoError: Observable<any>;
  zipCodeError: Observable<any>;
  cityError: Observable<any>;
  phoneNumberError: Observable<any>;
  emailError: Observable<any>;
  passwordError: Observable<any>;

  isFetchSuccess: SubscriptionLike;


  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({});
    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = new Date();
    this.addressOne = '';
    this.addressTwo = '';
    this.zipCode = '';
    this.city = '';
    this.phoneNumber = '';
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
    ]);
    this.addressOneFormControl = new FormControl('', [
      Validators.required
    ]);
    this.addressTwoFormControl = new FormControl('', [
      Validators.required
    ]);
    this.zipCodeFormControl = new FormControl('', [
      Validators.required,
    ]);
    this.cityFormControl = new FormControl('', [
      Validators.required
    ]);
    this.phoneNumberFormControl = new FormControl('', [
      Validators.required
    ]);
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = new FormControl('' ,[
      Validators.required
    ])

    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("FirstName")).subscribe(res => {
      if (res) {
        this.firstNameFormControl.setErrors({ backend: true });
      }
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("LastName")).subscribe(res => {
      if (res) {
        this.lastNameFormControl.setErrors({ backend: true });
      }
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("DateOfBirth")).subscribe(res => {
      this.dateOfBirthFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("AddressOne")).subscribe(res => {
      this.addressOneFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("AddressTwo")).subscribe(res => {
      this.addressTwoFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("ZipCode")).subscribe(res => {
      this.zipCodeFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("City")).subscribe(res => {
      this.cityFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("PhoneNumber")).subscribe(res => {
      this.phoneNumberFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("Email")).subscribe(res => {
      this.emailFormControl.setErrors({ backend: true })
    });
    this.store.select(getRegisterCareConsumerFetchError400ErrorsKeys("Password")).subscribe(res => {
      this.passwordFormControl.setErrors({ backend: true })
    });
    this.firstNameError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("FirstName"));
    this.lastNameError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("LastName"));
    this.dateOfBirthError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("DateOfBirth"));
    this.addressOneError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("AddressOne"));
    this.addressTwoError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("AddressTwo"));
    this.zipCodeError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("ZipCode"));
    this.cityError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("City"));
    this.phoneNumberError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("PhoneNumber"));
    this.emailError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("Email"));
    this.passwordError = this.store.select(getRegisterCareConsumerFetchError400ErrorsValue("Password"));

    this.isFetchSuccess = this.store.select(getRegisterCareConsumerIsFetchSuccess).subscribe(res => {
      if (res) this.router.navigate(['/please-confirm']);
    })
  }
  fetch() {
    this.store.dispatch<IAschacDispatch<IRegisterCareconsumerFetch>>({
      type: RDX_REGISTER_CARECONSUMER_FETCH,
      payload: {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        addressOne: this.addressOne,
        addressTwo: this.addressTwo,
        zipCode: this.zipCode,
        city: this.city,
        phoneNumber: this.phoneNumber,
        email: this.email,
        password: this.password
      }
    })
  }
  ngOnDestroy(): void {
      this.isFetchSuccess.unsubscribe();
  }
}
