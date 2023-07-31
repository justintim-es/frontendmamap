import { createReducer, on } from "@ngrx/store";
import { IMainCareconsumerRequestChooseCaregiversSuccess, IMainCareconsumerRequestChooseCaregiversSuccessCaregivers, rdxMainCareconsumerRequestChooseCaregiverAddOrRemoveInvited, rdxMainCareconsumerRequestChooseCaregivers, rdxMainCareconsumerRequestChooseCaregiversSuccess, rdxMainCareconsumerRequestChooseInviteFetch, rdxMainCareconsumerRequestChooseInviteFetchSuccess } from "./actions";
import { List } from 'immutable';
export interface IMainCareconsumerRequestChooseReducer {
    isCaregivers: boolean;
    isCaregiversSuccess: boolean;
    degreedCareGivers: IMainCareconsumerRequestChooseCaregiversSuccessCaregivers[];
    undegreedCareGivers: IMainCareconsumerRequestChooseCaregiversSuccessCaregivers[];
    city: string;
    invited: List<string>;
    isInviteFetch: boolean;
    isInviteFetchSuccess: boolean;
}
const mainCareconsumerRequestChooseInitial: IMainCareconsumerRequestChooseReducer = {
  isCaregivers: false,
  isCaregiversSuccess: false,
  degreedCareGivers: [],
  undegreedCareGivers: [],
  city: '',
  invited: List(),
  isInviteFetch: false,
  isInviteFetchSuccess: false
}
export const mainCareconsumerRequestChooseReducer = createReducer(
  mainCareconsumerRequestChooseInitial,
  on(rdxMainCareconsumerRequestChooseCaregivers, (state: IMainCareconsumerRequestChooseReducer) => {
    return {
      ...state,
      isCaregivers: true,
      isCaregiversSuccess: false,
      careGivers: []
    }
  }),
  on(rdxMainCareconsumerRequestChooseCaregiversSuccess, (state: IMainCareconsumerRequestChooseReducer, action) => {
    return {
      ...state,
      isCaregivers: false,
      isCaregiversSuccess: true,
      degreedCareGivers: action.payload!.degreedCareGivers,
      undegreedCareGivers: action.payload!.undegreedCareGivers,
      city: action.payload!.city
    }
  }),
  on(rdxMainCareconsumerRequestChooseCaregiverAddOrRemoveInvited, (state: IMainCareconsumerRequestChooseReducer, action) => {
    return {
      ...state,
      invited:
      state.invited.contains(action.payload!) ?
      state.invited.remove(state.invited.indexOf(action.payload!)) :
      state.invited.push(action.payload!)
    }
  }),
  on(rdxMainCareconsumerRequestChooseInviteFetch, (state: IMainCareconsumerRequestChooseReducer) => {
    return {
      ...state,
      isInviteFetch: true,
      isInviteFetchSuccess: false
    }
  }),
  on(rdxMainCareconsumerRequestChooseInviteFetchSuccess, (state: IMainCareconsumerRequestChooseReducer) => {
    return {
      ...state,
      isInviteFetch: false,
      isInviteFetchSuccess: true
    }
  })
)
