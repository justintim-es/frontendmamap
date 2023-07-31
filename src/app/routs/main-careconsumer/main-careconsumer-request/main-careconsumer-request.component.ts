import { Time } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareconsumerRequestFetch, IMainCareconsumerRequestFetchError, RDX_MAIN_CARECONSUMER_REQUEST_FETCH, RDX_MAIN_CARECONSUMER_REQUEST_FETCH_ERROR } from 'src/app/redux/main-careconsumer-request/actions';
import { getMainCareconsumerRequestFetchErrorErrorsKeys, getMainCareconsumerRequestFetchErrorErrorsValue, getMainCareconsumerRequestIsFetch, getMainCareconsumerRequestIsFetchSuccess, getMainCareconsumerRequestRequestId } from 'src/app/redux/main-careconsumer-request/selectors';

@Component({
  selector: 'app-main-careconsumer-request',
  templateUrl: './main-careconsumer-request.component.html',
  styleUrls: ['./main-careconsumer-request.component.css']
})
export class MainCareconsumerRequestComponent implements OnDestroy {
  task: string;
  description: string;
  interval: string;
  date: Date | null;
  time: Time;
  compensation: string | null;

  form: FormGroup;

  taskFormControl: FormControl;
  descriptionFormControl: FormControl;
  intervalFormControl: FormControl;
  dateFormControl: FormControl;
  timeFormControl: FormControl;
  compensationFormControl: FormControl;

  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  requestId: number;
  requestIdSub: SubscriptionLike;

  taskError: Observable<any>;
  descriptionError: Observable<any>
  intervalError: Observable<any>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.task = '';
    this.description = '';
    this.interval =  '';
    this.date = null;
    this.time = {
      hours: 0,
      minutes: 0,
    }
    this.compensation = null;

    this.form = this.fb.group({});

    this.taskFormControl = new FormControl('', [
      Validators.required
    ]);
    this.descriptionFormControl = new FormControl('', [
      Validators.required
    ]);
    this.intervalFormControl = new FormControl('', [
      Validators.required
    ])
    this.dateFormControl = new FormControl('')
    this.timeFormControl = new FormControl('')
    this.compensationFormControl = new FormControl();

    this.isFetch = this.store.select(getMainCareconsumerRequestIsFetch);
    this.requestId = 0;
    this.requestIdSub = this.store.select(getMainCareconsumerRequestRequestId).subscribe(res => this.requestId = res);
    this.isFetchSuccess = this.store.select(getMainCareconsumerRequestIsFetchSuccess).subscribe(res => {
      if (res) this.router.navigate(['/main-careconsumer/request-choose/' + this.requestId]);
    })
    this.store.select(getMainCareconsumerRequestFetchErrorErrorsKeys("Task")).subscribe(res => {
      if (res) this.taskFormControl.setErrors({ backend: true });
    });
    this.store.select(getMainCareconsumerRequestFetchErrorErrorsKeys("Description")).subscribe(res => {
      if (res) this.descriptionFormControl.setErrors({ backend: true });
    });
    this.store.select(getMainCareconsumerRequestFetchErrorErrorsKeys("Interval")).subscribe(res => {
      if (res) this.intervalFormControl.setErrors({ backend: true });
    })
    this.taskError = this.store.select(getMainCareconsumerRequestFetchErrorErrorsValue("Task"));
    this.descriptionError = this.store.select(getMainCareconsumerRequestFetchErrorErrorsValue("Description"));
    this.intervalError = this.store.select(getMainCareconsumerRequestFetchErrorErrorsValue("Interval"));

  }
  fetch() {
    this.store.dispatch<IAschacDispatch<IMainCareconsumerRequestFetch>>({
      type: RDX_MAIN_CARECONSUMER_REQUEST_FETCH,
      payload: {
        task: this.task,
        description: this.description,
        interval: this.interval,
        // date: this.date,
        // time: this.time,
        // compensation: this.compensation ? parseInt(this.compensation) : null
      }
    })
  }
  ngOnDestroy(): void {
    this.isFetchSuccess.unsubscribe();
    this.requestIdSub.unsubscribe();
  }
}
