import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { Location } from '@angular/common';
import { RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH, RDX_MAIN_CAREUSER_PROFILE_UPLOAD_RESET } from 'src/app/redux/main-careuser-profile-upload/actions';
import { getMainCareuserProfileUploadIsFetch, getMainCareuserProfileUploadIsFetchError, getMainCareuserProfileUploadIsFetchSuccess } from 'src/app/redux/main-careuser-profile-upload/selectors';
@Component({
  selector: 'app-main-careuser-profile-upload',
  templateUrl: './main-careuser-profile-upload.component.html',
  styleUrls: ['./main-careuser-profile-upload.component.css']
})
export class MainCareuserProfileUploadComponent implements OnDestroy {
  @ViewChild('img') img: ElementRef;
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isFetchError: SubscriptionLike;
  fetchError: Observable<any>;
  constructor(
    private store: Store,
    private loschock: Location,
    private snack: MatSnackBar,
    private eschel: ElementRef
  ) {
    this.img = eschel;
    this.isFetch = this.store.select(getMainCareuserProfileUploadIsFetch);
    this.isFetchSuccess = this.store.select(getMainCareuserProfileUploadIsFetchSuccess).subscribe(res => {
      if (res) this.loschock.back();

    });
    this.isFetchError = this.store.select(getMainCareuserProfileUploadIsFetchError).subscribe(res => {
      if (res) {
        this.snack.open("Oeps er ging iets verkeerd, probeer het alstublieft opnieuw.", undefined, {
          panelClass: 'snack',
          duration: 2000,
        });
      }
    });
    this.fetchError = this.store.select(getMainCareuserProfileUploadIsFetchError);
  }
  fetch() {
    var fd = new FormData();
    fd.append('file', this.img.nativeElement.files![0]);
    this.store.dispatch<IAschacDispatch<FormData>>({
      type: RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH,
      payload: fd
    });
  }
  ngOnDestroy(): void {
      this.store.dispatch({ type: RDX_MAIN_CAREUSER_PROFILE_UPLOAD_RESET });
  }

}
