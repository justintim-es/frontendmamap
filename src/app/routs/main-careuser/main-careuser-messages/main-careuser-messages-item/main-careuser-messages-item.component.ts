import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMainCareuserMessagesFetchSuccess } from 'src/app/redux/main-careuser-messages/actions';
import { getMainCareuserMessagesUnread } from 'src/app/redux/main-careuser-messages/selectors';

@Component({
  selector: 'app-main-careuser-messages-item',
  templateUrl: './main-careuser-messages-item.component.html',
  styleUrls: ['./main-careuser-messages-item.component.css']
})
export class MainCareuserMessagesItemComponent implements OnInit {
  @Input('conversation') conversation!: IMainCareuserMessagesFetchSuccess[];
  @Input('idx') idx!: number;
  unread!: Observable<number>;
  constructor(
    private store: Store
  ) {
  }
  ngOnInit(): void {
    this.unread = this.store.select(getMainCareuserMessagesUnread(this.idx));
  }
  raschan() {
    return new Date().getTime();
  }
}
