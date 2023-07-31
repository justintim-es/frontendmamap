import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareuserMessagesConversationFetchSuccess, IMainCareuserMessagesConversationWriteFetch, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_ERROR } from 'src/app/redux/main-careuser-messages-conversation/actions';
import { getMainCareuserMessagesConversationConversation, getMainCareuserMessagesConversationIsMessages, getMainCareuserMessagesConversationIsMessagesSuccess, getMainCareuserMessagesConversationIsReadFetch, getMainCareuserMessagesConversationIsReadFetchSuccess, getMainCareuserMessagesConversationIsWriteFetch, getMainCareuserMessagesConversationIsWriteFetchSuccess } from 'src/app/redux/main-careuser-messages-conversation/selectors';
import { getRouterStateUrl } from 'src/app/redux/router/selectors';
import { getUrlsImg } from 'src/app/redux/urls/selectors';

@Component({
  selector: 'app-main-careuser-messages-conversation',
  templateUrl: './main-careuser-messages-conversation.component.html',
  styleUrls: ['./main-careuser-messages-conversation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCareuserMessagesConversationComponent implements OnDestroy {
  to!: string;
  sub: SubscriptionLike;
  isReadFetch: Observable<boolean>;
  isReadFetchSuccess: Observable<boolean>;
  isMessages: Observable<boolean>;
  isMessagesSuccess: Observable<boolean>;
  con: Observable<List<IMainCareuserMessagesConversationFetchSuccess>>
  img: Observable<string>;
  isWriteFetch: Observable<boolean>;
  isWriteFetchSuccess: Observable<boolean>;
  url: Observable<string>;

  txt: string;
  txtFormControl: FormControl;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.sub = this.route.paramMap.subscribe(res => {
      this.to = res.get('to')!;
      this.store.dispatch<IAschacDispatch<string>>({
        type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH,
        payload: this.to
      });
      this.store.dispatch<IAschacDispatch<string>>({
        type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES,
        payload: this.to
      })
    });
    this.isReadFetch = this.store.select(getMainCareuserMessagesConversationIsReadFetch);
    this.isReadFetchSuccess = this.store.select(getMainCareuserMessagesConversationIsReadFetchSuccess);
    this.isMessages = this.store.select(getMainCareuserMessagesConversationIsMessages);
    this.isMessagesSuccess = this.store.select(getMainCareuserMessagesConversationIsMessagesSuccess);
    this.con = this.store.select(getMainCareuserMessagesConversationConversation);
    this.img = this.store.select(getUrlsImg);
    this.isWriteFetch = this.store.select(getMainCareuserMessagesConversationIsWriteFetch);
    this.isWriteFetchSuccess = this.store.select(getMainCareuserMessagesConversationIsWriteFetchSuccess);
    this.url = this.store.select(getRouterStateUrl);
    this.txt = '';
    this.txtFormControl = new FormControl('')
    this.form = this.fb.group({});
  }
  raschan() {
    return new Date().getTime();
  }
  write() {
    this.store.dispatch<IAschacDispatch<IMainCareuserMessagesConversationWriteFetch>>({
      type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH,
      payload: {
        recieverId: this.to,
        content: this.txt
      }
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
