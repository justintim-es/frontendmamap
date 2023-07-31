import { createFeatureSelector, createSelector } from "@ngrx/store";
import { List } from "immutable";
import { IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment } from "./actions";
import { IMainCareuserMessagesConversationReducer } from "./reducer";

const getMainCareuserMessagesConversationFeatureState = createFeatureSelector<IMainCareuserMessagesConversationReducer>('mainCareuserMessagesConversationReducer')
export const getMainCareuserMessagesConversationIsReadFetch = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isReadFetch
)
export const getMainCareuserMessagesConversationIsReadFetchSuccess = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isReadFetchSuccess
)
export const getMainCareuserMessagesConversationIsMessages = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isMessages
)
export const getMainCareuserMessagesConversationIsMessagesSuccess = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isMessagesSuccess
)
export const getMainCareuserMessagesConversationConversation = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.conversation
)
export const getMainCareuserMessagesConversationIsWriteFetch = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isWriteFetch
)
export const getMainCareuserMessagesConversationIsWriteFetchSuccess = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isWriteFetchSuccess
)
// export const getMainCareuserMessagesConversationConversationFilterId = (id: number) => createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   state => state.conversation.filter(c => c.careRequestId == id)
// )
///what we do only the last reference to the same carerequestid is displayed
/// the function below returns true if its the last conversation has the same carerequest id
/// what we actually wanna know is
/// it has to be a the same as the conversation at a given index which is
/// because of that you only saw the last message if th
/// maby we should have an enum instead with the button should be aannemen should be offer shouldnt be their
/// so in the backend i would like to have render tile
// export const getMainCareuserMessagesConversationConversationFilteredIdShowButton = (id: number, index: number) => createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   getMainCareuserMessagesConversationConversationFilterId(id),
//   (state, filtered) => filtered.last() == state.conversation.get(index)
// )
export const getMainCareuserMessagesConversationIsAcceptFetch = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isAcceptFetch
)
export const getMainCareuserMessagesConversationIsAcceptFetchSuccess = createSelector(
  getMainCareuserMessagesConversationFeatureState,
  state => state.isAcceptFetchSuccess
)
// export const getMainCareuserMessagesConversationAppointments = (index: number) => createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   state => state.conversation.get(index)?.careRequest?.appointments
// )
// export const getMainCareuserMessagesConversationAppointmentsShift  = (index: number) => createSelector(
//   getMainCareuserMessagesConversationAppointments(index),
//   (appointments: (IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment[] | undefined)) => {
//     const result = [...appointments!];
//     return result.shift();
//   }
// )
// export const getMainCareuserMessagesConversationOccupiedAppointmentIds = createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   state => state.occupiedAppointmentIds
// )
// export const getMainCareuserMessagesConversationFreeAppointment = (index: number) => createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   getMainCareuserMessagesConversationOccupiedAppointmentIds,
//   (state, ids) => state.conversation
// )

//cehck if the list doesnt contains the collected appointmentIds
// export const getMainCareuserMessagesConversationFirstAppointment = (index: number) => createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   getMainCareuserMessagesConversationOccupiedAppointmentIds,
//   (state, ids) => state.conversation.get(index)!.careRequest?.appointments.filter(a => !ids.contains(a.id!))[0]
// )

// export const getMainCareuserMessagesConversationOneAppointment = (findex: number, appointmentcounter: number) => createSelector(
//   getMainCareuserMessagesConversationFeatureState,
//   state => state.conversation.get(findex)!.careRequest?.appointments
// )
