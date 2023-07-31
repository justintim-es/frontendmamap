import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoginId } from 'src/app/redux/login/selectors';
import { IMainCareuserMessagesFetchSuccess, RDX_MAIN_CAREUSER_MESSAGES_FETCH } from 'src/app/redux/main-careuser-messages/actions';
import { getMainCareuserMessagesConversations, getMainCareuserMessagesIsFetch, getMainCareuserMessagesIsFetchSuccess } from 'src/app/redux/main-careuser-messages/selectors';
import { getRouterStateUrl } from 'src/app/redux/router/selectors';

@Component({
  selector: 'app-main-careuser-messages',
  templateUrl: './main-careuser-messages.component.html',
  styleUrls: ['./main-careuser-messages.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCareuserMessagesComponent {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  conversations: Observable<IMainCareuserMessagesFetchSuccess[][]>
  url: Observable<string>;
  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(getMainCareuserMessagesIsFetch);
    this.isFetchSuccess = this.store.select(getMainCareuserMessagesIsFetchSuccess);
    this.conversations = this.store.select(getMainCareuserMessagesConversations);
    this.url = this.store.select(getRouterStateUrl);

    this.store.dispatch({
      type: RDX_MAIN_CAREUSER_MESSAGES_FETCH
    })
  }

}
