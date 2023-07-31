import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareconsumerProfileFetchRepeatAppointment, IMaincareconsumerProfileFetchRepeatAppointmentSuccess, IMainCareconsumerProfileFetchSuccessAppointment, RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED, RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED, RDX_MAIN_CARECONSUMER_PROFILE_IS_ROUTE_REPEAT_FALSE } from 'src/app/redux/main-careconsumer-profile/actions';
import { getMainCareconsumerProfileIsFetchPassedRepeats, getMainCareconsumerProfileIsFetchPlannedRepeats, getMainCareconsumerProfileIsRouteRepeat, getMainCareconsumerProfilePassed, getMainCareconsumerProfileToRouteAppointmentId } from 'src/app/redux/main-careconsumer-profile/selectors';
import { getUrlsImg } from 'src/app/redux/urls/selectors';

@Component({
  selector: 'app-main-careconsumer-profile-appointment',
  templateUrl: './main-careconsumer-profile-appointment.component.html',
  styleUrls: ['./main-careconsumer-profile-appointment.component.css']
})
export class MainCareconsumerProfileAppointmentComponent implements OnDestroy {
  @Input('appointment') appointment!: IMainCareconsumerProfileFetchSuccessAppointment;
  @Input('index') index!: number;
  @Input('isPlanned') isPlanned!: boolean;
  imgUrl: Observable<string>;
  isSpinner: boolean;

  isFetchPlannedRepeats: Observable<List<boolean>>;
  isFetchPassedRepeats: Observable<List<boolean>>;
  newAppointmentIdSub: SubscriptionLike;
  newAppointmentId: number;
  isRouteRepeatSub: SubscriptionLike;
  constructor(
    private store: Store,
    private router: Router
  ) {
    this.isSpinner = false;
    this.newAppointmentId = 0;
    this.imgUrl = this.store.select(getUrlsImg);
    this.isFetchPlannedRepeats = this.store.select(getMainCareconsumerProfileIsFetchPlannedRepeats);
    this.isFetchPassedRepeats = this.store.select(getMainCareconsumerProfileIsFetchPassedRepeats);
    this.newAppointmentIdSub = this.store.select(getMainCareconsumerProfileToRouteAppointmentId).subscribe(res => this.newAppointmentId = res);
    this.isRouteRepeatSub = this.store.select(getMainCareconsumerProfileIsRouteRepeat).subscribe(res => {
      if (res) {
        this.store.dispatch({ type: RDX_MAIN_CARECONSUMER_PROFILE_IS_ROUTE_REPEAT_FALSE });
        this.router.navigate(['/main-careconsumer/messages-conversation-accept/true/' + this.appointment.careRequest.id + '/' + this.newAppointmentId + '/' + this.appointment.careGiverId]);
      }
    })

  }
  raschan() {
    return new Date().getTime();
  }
  repeat() {
    if (this.isPlanned) {
      this.store.dispatch<IAschacDispatch<IMainCareconsumerProfileFetchRepeatAppointment>>({
        type: RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED,
        payload: {
          index: this.index,
          careGiverId: this.appointment.careGiverId,
          careRequestId: this.appointment.careRequest.id
        }
      })
    } else {
      this.store.dispatch<IAschacDispatch<IMainCareconsumerProfileFetchRepeatAppointment>>({
        type: RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED,
        payload: {
          index: this.index,
          careGiverId: this.appointment.careGiverId,
          careRequestId: this.appointment.careRequest.id
        }
      })
    }
  }
  ngOnDestroy(): void {
      this.newAppointmentIdSub.unsubscribe();
      this.isRouteRepeatSub.unsubscribe();
  }
}
