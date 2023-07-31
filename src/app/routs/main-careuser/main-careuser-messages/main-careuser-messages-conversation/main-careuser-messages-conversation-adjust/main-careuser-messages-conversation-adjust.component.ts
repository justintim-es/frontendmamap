import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-main-careuser-messages-conversation-adjust',
  templateUrl: './main-careuser-messages-conversation-adjust.component.html',
  styleUrls: ['./main-careuser-messages-conversation-adjust.component.css']
})
export class MainCareuserMessagesConversationAdjustComponent {
  id: string;
  routesub: SubscriptionLike;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    this.id = '';
    this.routesub = this.route.paramMap.subscribe(res => {
      this.id = res.get('id')!
    })
  }
}
