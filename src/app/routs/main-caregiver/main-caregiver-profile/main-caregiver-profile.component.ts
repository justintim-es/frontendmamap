import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { getLoginId } from 'src/app/redux/login/selectors';
import { IMainCaregiverProfileBiographyFetch, RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH, RDX_MAIN_CAREGIVER_PROFILE_FETCH } from 'src/app/redux/main-caregiver-profile/actions';
import { getMainCaregiverProfileBiography, getMainCaregiverProfileFirstName, getMainCaregiverProfileIsBiographyFetch, getMainCaregiverProfileIsFetch, getMainCaregiverProfileIsFetchSuccess, getMainCaregiverProfileProfileImage } from 'src/app/redux/main-caregiver-profile/selectors';

@Component({
  selector: 'app-main-caregiver-profile',
  templateUrl: './main-caregiver-profile.component.html',
  styleUrls: ['./main-caregiver-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCaregiverProfileComponent {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  profileImage: Observable<boolean>;
  id: Observable<string>;
  biographySub: SubscriptionLike;
  biografie: string;
  biografieFormControl: FormControl;

  isBiographyFetch: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(getMainCaregiverProfileIsFetch);
    this.isFetchSuccess = this.store.select(getMainCaregiverProfileIsFetchSuccess);
    this.profileImage = this.store.select(getMainCaregiverProfileProfileImage);
    this.id = this.store.select(getLoginId);
    this.biographySub = this.store.select(getMainCaregiverProfileBiography).subscribe(res => this.biografie = res);
    this.biografie = '';
    this.biografieFormControl = new FormControl('');

    this.isBiographyFetch = this.store.select(getMainCaregiverProfileIsBiographyFetch);
    this.store.dispatch({
      type: RDX_MAIN_CAREGIVER_PROFILE_FETCH
    });

  }
  biographyFetch() {
    this.store.dispatch<IAschacDispatch<IMainCaregiverProfileBiographyFetch>>({
      type: RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH,
      payload: {
        biography: this.biografie
      }
    });
  }
  raschan() {
    return new Date().getTime();
  }
}
