import { Time } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, SubscriptionLike } from 'rxjs';
import { IAschacCreate, IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareuserMessagesConversationOfferCareRequest, IMainCareuserMessagesConversationOfferCareRequestSuccess, IMainCareuserMessagesConversationOfferFetch, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_RESET } from 'src/app/redux/main-careuser-messages-conversation-offer/actions';
import { IMainCareuserMessagesConversationOfferReducer } from 'src/app/redux/main-careuser-messages-conversation-offer/reducer';
import { getMainCareuserMessagesConversationOfferCareRequest, getMainCareuserMessagesConversationOfferFetchError400ErrorsKeys, getMainCareuserMessagesConversationOfferFetchError400ErrorsValue, getMainCareuserMessagesConversationOfferHasImage, getMainCareuserMessagesConversationOfferIsCareRequest, getMainCareuserMessagesConversationOfferIsCareRequestSuccess, getMainCareuserMessagesConversationOfferIsFetch, getMainCareuserMessagesConversationOfferIsFetchSuccess, getMainCareuserMessagesConversationOfferIsHasImage } from 'src/app/redux/main-careuser-messages-conversation-offer/selectors';
import { getMainCareuserMessagesConversationIsReadFetch } from 'src/app/redux/main-careuser-messages-conversation/selectors';
import { getRouterStateUrl } from 'src/app/redux/router/selectors';
import { getUrlsImg } from 'src/app/redux/urls/selectors';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-careuser-messages-conversation-offer',
  templateUrl: './main-careuser-messages-conversation-offer.component.html',
  styleUrls: ['./main-careuser-messages-conversation-offer.component.css']
})
export class MainCareuserMessagesConversationOfferComponent implements OnDestroy {
  isCareRequest: Observable<boolean>;
  isCareRequestSuccess: Observable<boolean>;
  careRequest: Observable<IMainCareuserMessagesConversationOfferCareRequestSuccess>
  imgUrl: Observable<string>;
  isHasImage: Observable<boolean>;
  hasImage: Observable<boolean>;
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  careRequestSub: SubscriptionLike;

  routesub: SubscriptionLike
  requestId: number;
  appointmentId: number;
  id: string;

  dateFormControl: FormControl;
  date: Date | undefined;
  timeFormControl: FormControl;
  time: string | null | undefined;
  compensationFormControl: FormControl;
  compensation: string | number | null | undefined;
  form: FormGroup;
  isButtonDisabled: boolean;
  repeat: boolean;

  dateError: Observable<any>;
  compensationError: Observable<any>

  constructor(
    private fb: FormBuilder,
    private loschock: Location,
    private store: Store,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.isButtonDisabled = false;
    this.careRequestSub = this.store.select(getMainCareuserMessagesConversationOfferCareRequest).subscribe(res => {
      this.dateFormControl = new FormControl({ disabled: res.appointment?.date ? true : false, value: res.appointment?.date });
      this.date = res.appointment?.date!;
      this.timeFormControl = new FormControl({ disabled: (res.appointment?.time || !res.appointment?.date) ? true : false, value: '' });
      this.time = res.appointment?.time;
      this.compensationFormControl = new FormControl({ disabled: res.appointment?.compensation ? true : false , value: res.appointment?.compensation });
      this.compensation = res.appointment?.compensation;
      this.isButtonDisabled = res.appointment?.date != null && res.appointment.time != null && res.appointment.compensation != null;
    });
    this.isCareRequest = this.store.select(getMainCareuserMessagesConversationOfferIsCareRequest);
    this.isCareRequestSuccess = this.store.select(getMainCareuserMessagesConversationOfferIsCareRequestSuccess);
    this.careRequest = this.store.select(getMainCareuserMessagesConversationOfferCareRequest);
    this.imgUrl = this.store.select(getUrlsImg);
    this.isHasImage = this.store.select(getMainCareuserMessagesConversationOfferIsHasImage);
    this.hasImage = this.store.select(getMainCareuserMessagesConversationOfferHasImage);
    this.isFetch = this.store.select(getMainCareuserMessagesConversationOfferIsFetch);
    this.isFetchSuccess = this.store.select(getMainCareuserMessagesConversationOfferIsFetchSuccess).subscribe(res => {
      if (res) this.loschock.back();
    });

    this.requestId = 0;
    this.id = '';
    this.appointmentId = 0;
    this.repeat = false;
    this.routesub = this.route.paramMap.subscribe(res => {
      this.requestId = parseInt(res.get('requestId')!)
      this.id = res.get('id')!;
      this.appointmentId = parseInt(res.get('appointmentId')!);
      this.repeat = JSON.parse(res.get('repeat')!);
      this.store.dispatch<IAschacDispatch<IMainCareuserMessagesConversationOfferCareRequest>>({
        type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST,
        payload: {
          id: this.requestId,
          appId: this.appointmentId,
          to: this.id
        }
      });
      this.store.dispatch({
        type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE,
        payload: this.id
      })
    });
    this.dateFormControl = new FormControl();
    this.timeFormControl = new FormControl();
    this.time = '';
    this.compensationFormControl = new FormControl();
    this.compensation = '';
    this.form = this.fb.group({})
    this.store.select(getMainCareuserMessagesConversationOfferFetchError400ErrorsKeys("Date")).subscribe(res => {
      if (res) {
        this.dateFormControl.setErrors({ backend: true })
      }
    });
    this.store.select(getMainCareuserMessagesConversationOfferFetchError400ErrorsKeys("Compensation")).subscribe(res => {
      if (res) {
        this.compensationFormControl.setErrors({ backend: true });
      }
    });
    this.dateError = this.store.select(getMainCareuserMessagesConversationOfferFetchError400ErrorsValue("Date"));
    this.compensationError = this.store.select(getMainCareuserMessagesConversationOfferFetchError400ErrorsValue("Compensation"));
  }
  raschan() {
    return new Date().getTime();
  }
  datechange() {
    console.log('cammmehere')
    this.timeFormControl = new FormControl({ disabled: false })
    this.timeFormControl.enable();
    this.cd.detectChanges();
  }
  offer() {
    this.store.dispatch<IAschacDispatch<IMainCareuserMessagesConversationOfferFetch>>({
        type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH,
        payload: {
          repeat: this.repeat,
          requestId: this.requestId,
          appointmentId: this.appointmentId,
          to: this.id,
          date: this.date,
          time: this.time,
          compensation: this.compensation ? parseInt(this.compensation!.toString()) : null
        }
      })
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
    this.careRequestSub.unsubscribe();
    this.store.dispatch({ type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_RESET });
  }
}
