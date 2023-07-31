import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmCareconsumerComponent } from './routs/confirm-careconsumer/confirm-careconsumer.component';
import { ConfirmCaregiverComponent } from './routs/confirm-caregiver/confirm-caregiver.component';
import { LandingComponent } from './routs/landing/landing.component';
import { LoginComponent } from './routs/login/login.component';
import { MainCareconsumerProfileComponent } from './routs/main-careconsumer/main-careconsumer-profile/main-careconsumer-profile.component';
import { MainCareconsumerRequestChooseComponent } from './routs/main-careconsumer/main-careconsumer-request-choose/main-careconsumer-request-choose.component';
import { MainCareconsumerRequestComponent } from './routs/main-careconsumer/main-careconsumer-request/main-careconsumer-request.component';
import { MainCareconsumerReviewComponent } from './routs/main-careconsumer/main-careconsumer-review/main-careconsumer-review.component';
import { MainCareconsumerComponent } from './routs/main-careconsumer/main-careconsumer.component';
import { MainCaregiverProfileComponent } from './routs/main-caregiver/main-caregiver-profile/main-caregiver-profile.component';
import { MainCaregiverComponent } from './routs/main-caregiver/main-caregiver.component';
import { MainCareuserMessagesConversationAcceptComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-accept/main-careuser-messages-conversation-accept.component';
import { MainCareuserMessagesConversationAdjustComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-adjust/main-careuser-messages-conversation-adjust.component';
import { MainCareuserMessagesConversationOfferComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation-offer/main-careuser-messages-conversation-offer.component';
import { MainCareuserMessagesConversationComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages-conversation/main-careuser-messages-conversation.component';
import { MainCareuserMessagesComponent } from './routs/main-careuser/main-careuser-messages/main-careuser-messages.component';
import { MainCareuserProfileUploadComponent } from './routs/main-careuser/main-careuser-profile-upload/main-careuser-profile-upload.component';
import { OnboardRefreshComponent } from './routs/onboard-refresh/onboard-refresh.component';
import { OnboardComponent } from './routs/onboard/onboard.component';
import { PaymentSuccessComponent } from './routs/payment-success/payment-success.component';
import { PleaseConfirmComponent } from './routs/please-confirm/please-confirm.component';
import { RegisterCareconsumerComponent } from './routs/register-careconsumer/register-careconsumer.component';
import { RegisterCaregiverComponent } from './routs/register-caregiver/register-caregiver.component';
import { RegisterPayComponent } from './routs/register-pay/register-pay.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'register-caregiver', component: RegisterCaregiverComponent
  },
  {
    path: 'register-careconsumer', component: RegisterCareconsumerComponent
  },
  {
    path: 'please-confirm', component: PleaseConfirmComponent
  },
  {
    path: 'onboard/:id/:token', component: OnboardComponent
  },
  {
    path: 'confirm-caregiver/:id/:token', component: ConfirmCaregiverComponent
  },
  {
    path: 'register-pay/:id/:token', component: RegisterPayComponent
  },
  {
    path: 'confirm-careconsumer/:id/:token', component: ConfirmCareconsumerComponent
  },
  {
    path: 'onboard-refresh', component: OnboardRefreshComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main-caregiver',
    component: MainCaregiverComponent,
    children: [
      { path: 'profile', component: MainCaregiverProfileComponent },
      { path: 'upload', component: MainCareuserProfileUploadComponent },
      { path: 'messages', component: MainCareuserMessagesComponent },
      { path: 'messages-conversation/:to', component: MainCareuserMessagesConversationComponent },
      { path: 'messages-conversation-offer/:requestId/:appointmentId/:id', component: MainCareuserMessagesConversationOfferComponent },
    ]
  },
  {
    path: 'main-careconsumer',
    component: MainCareconsumerComponent,
    children: [
      { path: 'profile', component: MainCareconsumerProfileComponent },
      { path: 'upload', component: MainCareuserProfileUploadComponent },
      { path: 'request', component: MainCareconsumerRequestComponent },
      { path: 'request-choose/:request', component: MainCareconsumerRequestChooseComponent },
      { path: 'messages', component: MainCareuserMessagesComponent },
      { path: 'messages-conversation/:to', component: MainCareuserMessagesConversationComponent},
      { path: 'messages-conversation-offer/:repeat/:requestId/:appointmentId/:id', component: MainCareuserMessagesConversationOfferComponent },
      { path: 'messages-conversation-accept/:repeat/:requestId/:appointmentId/:id', component: MainCareuserMessagesConversationOfferComponent },
      { path: 'messages-conversation-review/:chatMessageId/:appointmentId/:caregiver', component: MainCareconsumerReviewComponent }
    ]
  },
  {
    path: 'payment-success/:prid/:cmid',
    component: PaymentSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
