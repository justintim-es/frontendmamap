import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { empty, Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareuserMessagesConversationCaregiverAcceptFetch, IMainCareuserMessagesConversationFetchSuccess, IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_APPOINTMENTID_ADD, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH } from 'src/app/redux/main-careuser-messages-conversation/actions';
import { getRouterStateUrl } from 'src/app/redux/router/selectors';
import { getUrlsImg } from 'src/app/redux/urls/selectors';

@Component({
  selector: 'app-main-careuser-messages-conversation-item',
  templateUrl: './main-careuser-messages-conversation-item.component.html',
  styleUrls: ['./main-careuser-messages-conversation-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCareuserMessagesConversationItemComponent implements OnInit {
  @Input('txt') txt!: IMainCareuserMessagesConversationFetchSuccess;
  @Input('idx') idx!: number;
  @Input('cid') cid!: number;
  // @Input('appid') appid!: number;
  url: Observable<string>;
  isButton: Observable<boolean>;
  // appointment: Observable<IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment | undefined>;
  // appointments: Observable<IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment[] | undefined>;
  to: string;
  // sappid: number;
  appIdx: number;
  routesub: SubscriptionLike;
  stars: number[]

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {
    // console.log('alwaysrendertile');
    // console.log(this.txt);
    this.url = this.store.select(getRouterStateUrl);
    this.to = '';
    this.isButton = empty();
    // this.appointment = empty()
    // this.sappid = 0;
    this.appIdx = 0;
    this.routesub = this.route.paramMap.subscribe(res => {
      this.to = res.get('to')!;
    })
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i);
    };
    // this.appointments = this.store.select(getMainCareuserMessagesConversationAppointments(this.idx));
  }
  ngOnInit(): void {
    console.log(this.cid);
    console.log(this.idx);
    console.log('alwaysrendertile');
    console.log(this.txt);
    // console.log('appid ', this.appid);
    // this.isButton = this.store.select(getMainCareuserMessagesConversationConversationFilteredIdShowButton(this.cid, this.idx));

    // does this gra first appointment out of all appointments and now
    // only because appointment has changed to appointments
    // this.appointment = this.store.select(getMainCareuserMessagesConversationAppointmentsShift(0));
    // this.appsub = this.store.select(getMainCareuserMessagesConversationAppointments(this.idx)).subscribe(res => {
    //   this.sappid = res?.id!;
    //   this.appIdx = res?.idx!;
    // })
    // this.store.dispatch({
    //   type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_APPOINTMENTID_ADD,
    //   payload: this.appid
    // });
  }
  ngDoCheck(): void {
    // this.appointment = this.store.select(getMainCareuserMessagesConversationAppointmentsShift(0));
    // this.appsub = this.store.select(getMainCareuserMessagesConversationAppointmentsShift(0)).subscribe(res => {
    //   this.sappid = res?.id!;
    //   this.appIdx = res?.idx!;
    // });
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.isButton = this.store.select(getMainCareuserMessagesConversationConversationFilteredIdShowButton(this.cicd, this.idx));
  }
  // dit zou hier ook txtId moeten heten want uiteindelijk gaat carerequestid naar
  // so appointment should have its index to
  showStars(index: number) {
    console.log(this.txt.careRequest?.appointment?.review?.stars!);
    if (this.txt.careRequest?.appointment?.review?.stars! >= index + 1) {
      return 'star';
    } else return 'star_border'
  }

  accept(cmId: number, appId:  number) {
    console.log('cmid', cmId);
    console.log('appid', appId);
    this.store.dispatch<IAschacDispatch<IMainCareuserMessagesConversationCaregiverAcceptFetch>>({
      type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH,
      payload: {
        appId: appId,
        index: this.idx,
        to: this.to,
        cmId: cmId,
        appIndex: this.appIdx
      }
    });
  }
}












