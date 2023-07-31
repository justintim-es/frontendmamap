import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IMainCareconsumerProfileFetchSuccessAppointment, rdxMainCareconsumerProfileFetch, rdxMainCareconsumerProfileFetchRepeatAppointmentPassed, rdxMainCareconsumerProfileFetchRepeatAppointmentPassedSuccess, rdxMainCareconsumerProfileFetchRepeatAppointmentPlanned, rdxMainCareconsumerProfileFetchRepeatAppointmentPlannedSuccess, rdxMainCareconsumerProfileFetchSuccess, rdxMainCareconsumerProfileHasOpponentImagePassedSuccess, rdxMainCareconsumerProfileHasOpponentImagePlannedSuccess, rdxMainCareconsumerProfileIsRouteRepeatFalse } from "./actions";

export interface IMainCareconsumerProfileReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  profileImage: boolean;
  planned: List<IMainCareconsumerProfileFetchSuccessAppointment>;
  isFetchPlannedRepeats: List<boolean>;
  passed: List<IMainCareconsumerProfileFetchSuccessAppointment>;
  isFetchPassedRepeats: List<boolean>;
  toRouteAppointmentId: number;
  isRouteRepeat: boolean;
}
export const mainCareconsumerProfileInitial: IMainCareconsumerProfileReducer = {
  isFetch: false,
  isFetchSuccess: false,
  profileImage: false,
  planned: List(),
  isFetchPlannedRepeats: List(),
  passed: List(),
  isFetchPassedRepeats: List(),
  toRouteAppointmentId: 0,
  isRouteRepeat: false
}
export const mainCareconsumerProfileReducer = createReducer(
  mainCareconsumerProfileInitial,
  on(rdxMainCareconsumerProfileFetch, (state: IMainCareconsumerProfileReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      profileImage: false
    }
  }),
  on(rdxMainCareconsumerProfileFetchSuccess, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      profileImage: action.payload?.profileImage!,
      isFetchPlannedRepeats: List(action.payload!.planned.map(p => false)),
      planned: List(action.payload?.planned!.map(p => {
        return {
          ...p,
          date: new Date(p.date!),
          hasImg: false,
          isFetchRepeat: false
        }
      }))!,
      isFetchPassedRepeats: List(action.payload?.passed.map(p => false)),
      passed: List(action.payload?.passed!.map(p => {
        return {
          ...p,
          date: new Date(p.date!),
          hasImg: false,
          isFetchRepeat: false
        }
      }))!
    }
  }),
  on(rdxMainCareconsumerProfileHasOpponentImagePlannedSuccess, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      planned: state.planned.setIn([action.payload?.index, 'hasImg'], action.payload?.has)
    }
  }),
  on(rdxMainCareconsumerProfileHasOpponentImagePassedSuccess, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      passed: state.passed.setIn([action.payload?.index, 'hasImg'], action.payload?.has)
    }
  }),
  on(rdxMainCareconsumerProfileFetchRepeatAppointmentPlanned, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      isFetchPlannedRepeats: state.isFetchPlannedRepeats.set(action.payload!.index!, true)
    }
  }),
  on(rdxMainCareconsumerProfileFetchRepeatAppointmentPassed, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      isFetchPassedRepeats: state.isFetchPassedRepeats.set(action.payload!.index!, true)
    }
  }),
  on(rdxMainCareconsumerProfileFetchRepeatAppointmentPlannedSuccess, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      isFetchPlannedRepeats: state.isFetchPlannedRepeats.set(action.payload!.index!, false),
      toRouteAppointmentId: action.payload?.appId!,
      isRouteRepeat: true,
    }
  }),
  on(rdxMainCareconsumerProfileFetchRepeatAppointmentPassedSuccess, (state: IMainCareconsumerProfileReducer, action) => {
    return {
      ...state,
      isFetchPassedRepeats: state.isFetchPlannedRepeats.set(action.payload!.index!, false),
      toRouteAppointmentId: action.payload?.appId!,
      isRouteRepeat: true
    }
  }),
  on(rdxMainCareconsumerProfileIsRouteRepeatFalse, (state: IMainCareconsumerProfileReducer) => {
    return {
      ...state,
      isRouteRepeat: false
    }
  })
)

