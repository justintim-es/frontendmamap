import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { getGlobalErrorIs } from './redux/global-error/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'froschon';
  isGlobalError: SubscriptionLike;;
  constructor(private store: Store, private snack: MatSnackBar) {
    this.isGlobalError = this.store.select(getGlobalErrorIs).subscribe(res => {
      if (res) {
        this.snack.open('Oeps er ging iets verkeerd', undefined, {
          panelClass: 'snack',
          duration: 2000
        })
      }
    })
  }
  ngOnDestroy(): void {
    this.isGlobalError.unsubscribe();
  }
}
