import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LandingComponent } from './routs/landing/landing.component';
import { RegisterCaregiverComponent } from './routs/register-caregiver/register-caregiver.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { registerCareGiverReducer } from './redux/register-caregiver/reducer';
import { RegisterCaregiverService } from './redux/register-caregiver/register-caregiver.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PleaseConfirmComponent } from './routs/please-confirm/please-confirm.component';
import { LoginComponent } from './routs/login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { tokenReducer } from './redux/token/reducer';
import { loginReducer } from './redux/login/reducer';
import { LoginService } from './redux/login/login.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainCaregiverToolbarComponent } from './routs/main-caregiver/main-caregiver-toolbar/main-caregiver-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { mainCaregiverToolbarReducer } from './redux/main-caregiver-toolbar/reducer';
import { MainCareuserProfileUploadComponent } from './routs/main-careuser/main-careuser-profile-upload/main-careuser-profile-upload.component';
import { mainCareuserProfileUploadReducer } from './redux/main-careuser-profile-upload/reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainCaregiverProfileService } from './redux/main-caregiver-profile/main-caregiver-profile.service';
import { mainCaregiverProfileReducer } from './redux/main-caregiver-profile/reducer';
import { globalErrorReducer } from './redux/global-error/reducer';
import { MatCardModule } from '@angular/material/card';
import { OnboardRefreshComponent } from './routs/onboard-refresh/onboard-refresh.component';
import { OnboardComponent } from './routs/onboard/onboard.component';
import { OnboardService } from './redux/onboard/onboard.service';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { onboardReducer } from './redux/onboard/reducer';
import { RegisterCareconsumerComponent } from './routs/register-careconsumer/register-careconsumer.component';
import { registerCareConsumerReducer } from './redux/register-careconsumer/reducer';
import { RegisterCareconsumerService } from './redux/register-careconsumer/register-careconsumer.service';
import { ConfirmCaregiverComponent } from './routs/confirm-caregiver/confirm-caregiver.component';
import { confirmCaregiverReducer } from './redux/confirm-caregiver/reducer';
import { ConfirmCaregiverService } from './redux/confirm-caregiver/confirm-caregiver.service';
import { RegisterPayComponent } from './routs/register-pay/register-pay.component';
import { RegisterPayService } from './redux/register-pay/register-pay.service';
import { registerPayReducer } from './redux/register-pay/reducer';
import { ConfirmCareconsumerComponent } from './routs/confirm-careconsumer/confirm-careconsumer.component';
import { confirmCareconsumerReducer } from './redux/confirm-careconsumer/reducer';
import { ConfirmCareconsumerService } from './redux/confirm-careconsumer/confirm-careconsumer.service';
import { MainCareuserProfileUploadService } from './redux/main-careuser-profile-upload/main-careuser-profile-upload.service';
import { MainCareconsumerComponent } from './routs/main-careconsumer/main-careconsumer.component';
import { MainCaregiverComponent } from './routs/main-caregiver/main-caregiver.component';
import { MainCaregiverProfileComponent } from './routs/main-caregiver/main-caregiver-profile/main-caregiver-profile.component';
import { MainCareconsumerProfileComponent } from './routs/main-careconsumer/main-careconsumer-profile/main-careconsumer-profile.component';
import { mainCareconsumerProfileReducer } from './redux/main-careconsumer-profile/reducer';
import { MainCareconsumerProfileService } from './redux/main-careconsumer-profile/main-careconsumer-profile.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MainCareconsumerRequestComponent } from './routs/main-careconsumer/main-careconsumer-request/main-careconsumer-request.component';
import { MatSelectModule } from '@angular/material/select';
import { mainCareconsumerRequestReducer } from './redux/main-careconsumer-request/reducer';
import { MainCareconsumerRequestService } from './redux/main-careconsumer-request/main-careconsumer-request.service';
import { MainCareconsumerRequestChooseComponent } from './routs/main-careconsumer/main-careconsumer-request-choose/main-careconsumer-request-choose.component';
import { mainCareconsumerRequestChooseReducer } from './redux/main-careconsumer-request-choose/reducer';
import { MainCareconsumerRequestChooseService } from './redux/main-careconsumer-request-choose/main-careconsumer-request-choose.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MainCaregiverToolbarService } from './redux/main-caregiver-toolbar/main-caregiver-toolbar.service';
import { MainCareuserMessagesComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages.component';
import { MainCareuserMessagesService } from './redux/main-careuser-messages/main-careuser-messages.service';
import { mainCareuserMessagesReducer } from './redux/main-careuser-messages/reducer';
import { MainCareuserMessagesConversationComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation.component';
import { MainCareuserMessagesItemComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-item/main-careuser-messages-item.component';
import { mainCareuserMessagesConversationReducer } from './redux/main-careuser-messages-conversation/reducer';
import { MainCareuserMessagesConversationService } from './redux/main-careuser-messages-conversation/main-careuser-messages-conversation.service';
import { urlsReducer } from './redux/urls/reducer';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MainCareuserMessagesConversationOfferComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-offer/main-careuser-messages-conversation-offer.component';
import { MainCareuserMessagesConversationAdjustComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-adjust/main-careuser-messages-conversation-adjust.component';
import { MainCareuserMessagesConversationOfferService } from './redux/main-careuser-messages-conversation-offer/main-careuser-messages-conversation-offer.service';
import { mainCareuserMessagesConversationOfferReducer } from './redux/main-careuser-messages-conversation-offer/reducer';
import { FORMAT } from './format';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MainCareuserMessagesConversationItemComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-item/main-careuser-messages-conversation-item.component';
import { MainCareconsumerProfileAppointmentComponent } from './routs/main-careconsumer/main-careconsumer-profile/main-careconsumer-profile-appointment/main-careconsumer-profile-appointment.component';
import { MainCareuserMessagesConversationAcceptComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-accept/main-careuser-messages-conversation-accept.component';
import { MainCareuserMessagesConversationAppointmentCounterComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-appointment-counter/main-careuser-messages-conversation-appointment-counter.component';
import { PaymentSuccessComponent } from './routs/payment-success/payment-success.component';
import { PaymentSuccessService } from './redux/payment-success/payment-success.service';
import { paymentSuccessReducer } from './redux/payment-success/reducer';
import { MainCareconsumerReviewComponent } from './routs/main-careconsumer/main-careconsumer-review/main-careconsumer-review.component';
import { mainCareconsumerReviewReducer } from './redux/main-careconsumer-review/reducer';
import { MainCareconsumerReviewService } from './redux/main-careconsumer-review/main-careconsumer-review.service';
import { MainCareconsumerRequestChooseStarsComponent } from './routs/main-careconsumer/main-careconsumer-request-choose/main-careconsumer-request-choose-stars/main-careconsumer-request-choose-stars.component';
import { MainCareconsumerReviewErrorComponent } from './routs/main-careconsumer/main-careconsumer-review/main-careconsumer-review-error/main-careconsumer-review-error.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { MainCareconsumerRequestChooseItemComponent } from './routs/main-careconsumer/main-careconsumer-request-choose/main-careconsumer-request-choose-item/main-careconsumer-request-choose-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterCaregiverComponent,
    PleaseConfirmComponent,
    LoginComponent,
    MainCaregiverProfileComponent,
    MainCaregiverToolbarComponent,
    MainCareuserProfileUploadComponent,
    OnboardRefreshComponent,
    OnboardComponent,
    RegisterCareconsumerComponent,
    ConfirmCaregiverComponent,
    RegisterPayComponent,
    ConfirmCareconsumerComponent,
    MainCareconsumerProfileComponent,
    MainCareconsumerComponent,
    MainCaregiverComponent,
    MainCareconsumerRequestComponent,
    MainCareconsumerRequestChooseComponent,
    MainCareuserMessagesComponent,
    MainCareuserMessagesConversationComponent,
    MainCareuserMessagesItemComponent,
    MainCareuserMessagesConversationOfferComponent,
    MainCareuserMessagesConversationAdjustComponent,
    MainCareuserMessagesConversationItemComponent,
    MainCareconsumerProfileAppointmentComponent,
    MainCareuserMessagesConversationAcceptComponent,
    MainCareuserMessagesConversationAppointmentCounterComponent,
    PaymentSuccessComponent,
    MainCareconsumerReviewComponent,
    MainCareconsumerRequestChooseStarsComponent,
    MainCareconsumerReviewErrorComponent,
    MainCareconsumerRequestChooseItemComponent,
  ],
  imports: [
    MatChipsModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    ScrollingModule,
    MatCheckboxModule,
    MatSelectModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      registerCareGiverReducer: registerCareGiverReducer,
      registerCareConsumerReducer: registerCareConsumerReducer,
      urlsReducer: urlsReducer,
      onboardReducer: onboardReducer,
      confirmCaregiverReducer: confirmCaregiverReducer,
      registerPayReducer: registerPayReducer,
      confirmCareconsumerReducer: confirmCareconsumerReducer,
      loginReducer: loginReducer,
      tokenReducer: tokenReducer,
      globalErrorReducer: globalErrorReducer,
      mainCaregiverToolbarReducer: mainCaregiverToolbarReducer,
      mainCaregiverProfileReducer: mainCaregiverProfileReducer,
      mainCareuserProfileUploadReducer: mainCareuserProfileUploadReducer,
      mainCareconsumerProfileReducer: mainCareconsumerProfileReducer,
      mainCareconsumerRequestReducer: mainCareconsumerRequestReducer,
      mainCareconsumerRequestChooseReducer: mainCareconsumerRequestChooseReducer,
      mainCareuserMessagesReducer: mainCareuserMessagesReducer,
      mainCareuserMessagesConversationReducer: mainCareuserMessagesConversationReducer,
      mainCareuserMessagesConversationOfferReducer: mainCareuserMessagesConversationOfferReducer,
      paymentSuccessReducer: paymentSuccessReducer,
      mainCareconsumerReviewReducer: mainCareconsumerReviewReducer,
      routerReducer: routerReducer
    }, {}),
    EffectsModule.forRoot([
      RegisterCaregiverService,
      RegisterCareconsumerService,
      OnboardService,
      ConfirmCaregiverService,
      RegisterPayService,
      ConfirmCareconsumerService,
      LoginService,
      MainCaregiverProfileService,
      MainCareconsumerProfileService,
      MainCareuserProfileUploadService,
      MainCareconsumerRequestService,
      MainCareconsumerRequestChooseService,
      MainCaregiverToolbarService,
      MainCareuserMessagesService,
      MainCareuserMessagesConversationService,
      MainCareuserMessagesConversationOfferService,
      PaymentSuccessService,
      MainCareconsumerReviewService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: FORMAT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
