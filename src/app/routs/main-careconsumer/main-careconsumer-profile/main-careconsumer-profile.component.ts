import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { getLoginId } from 'src/app/redux/login/selectors';
import { IMainCareconsumerProfileFetchSuccessAppointment, RDX_MAIN_CARECONSUMER_PROFILE_FETCH } from 'src/app/redux/main-careconsumer-profile/actions';
import { getMainCareconsumerIsFetch, getMainCareconsumerIsFetchSuccess, getMainCareconsumerProfileImage, getMainCareconsumerProfilePassed, getMainCareconsumerProfilePlanned } from 'src/app/redux/main-careconsumer-profile/selectors';
import { getUrlsImg } from 'src/app/redux/urls/selectors';
@Component({
  selector: 'app-main-careconsumer-profile',
  templateUrl: './main-careconsumer-profile.component.html',
  styleUrls: ['./main-careconsumer-profile.component.css']
})
export class MainCareconsumerProfileComponent implements OnInit {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  profileImage: Observable<boolean>;
  id: Observable<string>;
  imgUrl: Observable<string>;
  planned: Observable<List<IMainCareconsumerProfileFetchSuccessAppointment>>;
  passed: Observable<List<IMainCareconsumerProfileFetchSuccessAppointment>>;
  constructor(
    private store: Store,
  ) {
    this.isFetch = this.store.select(getMainCareconsumerIsFetch);
    this.isFetchSuccess = this.store.select(getMainCareconsumerIsFetchSuccess);
    this.profileImage = this.store.select(getMainCareconsumerProfileImage);
    this.id = this.store.select(getLoginId);
    this.imgUrl = this.store.select(getUrlsImg);
    this.planned = this.store.select(getMainCareconsumerProfilePlanned);
    this.passed = this.store.select(getMainCareconsumerProfilePassed);
    this.store.dispatch({
      type: RDX_MAIN_CARECONSUMER_PROFILE_FETCH
    })
  }
  ngOnInit(): void {
  }
  raschan() {
    return new Date().getTime();
  }
}
