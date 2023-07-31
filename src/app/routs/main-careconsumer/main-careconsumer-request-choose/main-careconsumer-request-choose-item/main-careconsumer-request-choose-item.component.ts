import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareconsumerRequestChooseCaregiversSuccessCaregivers, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED } from 'src/app/redux/main-careconsumer-request-choose/actions';

@Component({
  selector: 'app-main-careconsumer-request-choose-item',
  templateUrl: './main-careconsumer-request-choose-item.component.html',
  styleUrls: ['./main-careconsumer-request-choose-item.component.css']
})
export class MainCareconsumerRequestChooseItemComponent {
  @Input('caregiver') caregiver!: IMainCareconsumerRequestChooseCaregiversSuccessCaregivers;

  constructor(
    private store: Store
  ) {

  }

  caregiverAddOrRemoveInvited(id: string) {
    this.store.dispatch<IAschacDispatch<string>>({
      type: RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED,
      payload: id
    });
  }
}
