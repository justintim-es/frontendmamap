import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareconsumerRequestChooseCaregiversSuccess, IMainCareconsumerRequestChooseCaregiversSuccessCaregivers, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH } from 'src/app/redux/main-careconsumer-request-choose/actions';
import { getMainCareconsumerRequestChooseDegreedCareGivers, getMainCareconsumerRequestChooseCity, getMainCareconsumerRequestChooseIsCaregivers, getMainCareconsumerRequestChooseIsCaregiversSuccess, getMainCareconsumerRequestChooseIsInviteFetch, getMainCareconsumerRequestChooseIsInviteFetchSuccess, getMainCareconsumerRequestChooseUndegreedCareGivers } from 'src/app/redux/main-careconsumer-request-choose/selectors';

@Component({
  selector: 'app-main-careconsumer-request-choose',
  templateUrl: './main-careconsumer-request-choose.component.html',
  styleUrls: ['./main-careconsumer-request-choose.component.css']
})
export class MainCareconsumerRequestChooseComponent implements OnDestroy {
  isCaregivers: Observable<boolean>;
  isCaregiversSuccess: Observable<boolean>;
  city: Observable<string>;
  degreedCareGivers: Observable<IMainCareconsumerRequestChooseCaregiversSuccessCaregivers[]>;
  undegreedCareGivers: Observable<IMainCareconsumerRequestChooseCaregiversSuccessCaregivers[]>;
  isInviteFetch: Observable<boolean>;
  isInviteFetchSuccess: SubscriptionLike;
  requestId: number;
  routeSub: SubscriptionLike;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isCaregivers = this.store.select(getMainCareconsumerRequestChooseIsCaregivers);
    this.isCaregiversSuccess = this.store.select(getMainCareconsumerRequestChooseIsCaregiversSuccess);
    this.city = this.store.select(getMainCareconsumerRequestChooseCity);
    this.degreedCareGivers = this.store.select(getMainCareconsumerRequestChooseDegreedCareGivers);
    this.undegreedCareGivers = this.store.select(getMainCareconsumerRequestChooseUndegreedCareGivers);
    this.isInviteFetch = this.store.select(getMainCareconsumerRequestChooseIsInviteFetch);
    this.isInviteFetchSuccess = this.store.select(getMainCareconsumerRequestChooseIsInviteFetchSuccess).subscribe(res => {
      if (res) this.router.navigate(['/main-careconsumer/profile']);
    });
    this.store.dispatch({
      type: RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS
    });
    this.requestId = 0;
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.requestId = parseInt(res.get('request')!);
    });
  }

  invite() {
    this.store.dispatch<IAschacDispatch<number>>({
      type: RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH,
      payload: this.requestId
    })
  }
  ngOnDestroy(): void {
      this.routeSub.unsubscribe();
      this.isInviteFetchSuccess.unsubscribe();
  }
}
