import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMainCaregiverProfileFirstName } from 'src/app/redux/main-caregiver-profile/selectors';
import { RDX_MAIN_CAREGIVER_TOOLBAR_CLOSE, RDX_MAIN_CAREGIVER_TOOLBAR_OPEN, RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES } from 'src/app/redux/main-caregiver-toolbar/actions';
import { getMainCaregiverToolbarCurrent, getMainCaregiverToolbarIsOpen, getMainCaregiverToolbarIsUnreadMessagesFetch, getMainCaregiverToolbarIsUnreadMessagesFetchSuccess, getMainCaregiverToolbarUnreadMessages } from 'src/app/redux/main-caregiver-toolbar/selectors';

@Component({
  selector: 'app-main-caregiver-toolbar',
  templateUrl: './main-caregiver-toolbar.component.html',
  styleUrls: ['./main-caregiver-toolbar.component.css']
})
export class MainCaregiverToolbarComponent {
  current: Observable<string>;
  isOpen: Observable<boolean>;
  firstName: Observable<string>;
  isUnreadMessagesFetch: Observable<boolean>;
  isUnreadMessagesFetchSuccess: Observable<boolean>;
  unreadMessages: Observable<number>;
  constructor(private store: Store) {
    this.current = this.store.select(getMainCaregiverToolbarCurrent);
    this.isOpen = this.store.select(getMainCaregiverToolbarIsOpen);
    this.firstName = this.store.select(getMainCaregiverProfileFirstName);
    this.isUnreadMessagesFetch = this.store.select(getMainCaregiverToolbarIsUnreadMessagesFetch)
    this.isUnreadMessagesFetchSuccess = this.store.select(getMainCaregiverToolbarIsUnreadMessagesFetchSuccess);
    this.unreadMessages = this.store.select(getMainCaregiverToolbarUnreadMessages);
    this.store.dispatch({
      type: RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES
    })
  }
  open() {
    this.store.dispatch({
      type: RDX_MAIN_CAREGIVER_TOOLBAR_OPEN
    })
  }
  close() {
    this.store.dispatch({
      type: RDX_MAIN_CAREGIVER_TOOLBAR_CLOSE
    })
  }
}
