import { UrlHandlingStrategy } from "@angular/router";
import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IMainCareuserMessagesConversationFetchSuccess, rdxMainCareuserMessagesConversationAppointmentIdAdd, rdxMainCareuserMessagesConversationCaregiverAcceptFetch, rdxMainCareuserMessagesConversationCaregiverAcceptFetchError, rdxMainCareuserMessagesConversationCaregiverAcceptFetchSuccess, rdxMainCareuserMessagesConversationMessages, rdxMainCareuserMessagesConversationMessagesSuccess, rdxMainCareuserMessagesConversationReadFetch, rdxMainCareuserMessagesConversationReadFetchSuccess, rdxMainCareuserMessagesConversationWriteFetch, rdxMainCareuserMessagesConversationWriteFetchError, rdxMainCareuserMessagesConversationWriteFetchSuccess } from "./actions";

export interface IMainCareuserMessagesConversationReducer {
  isReadFetch: boolean;
  isReadFetchSuccess: boolean;
  isMessages: boolean;
  isMessagesSuccess: boolean;
  conversation: List<IMainCareuserMessagesConversationFetchSuccess>
  isWriteFetch: boolean;
  isWriteFetchSuccess: boolean
  isAcceptFetch: boolean;
  isAcceptFetchSuccess: boolean;
  occupiedAppointmentIds: List<number>;
}
const mainCareuserMessagesConversationInitial: IMainCareuserMessagesConversationReducer = {
  isReadFetch: false,
  isReadFetchSuccess: false,
  isMessages: false,
  isMessagesSuccess: false,
  conversation: List(),
  isWriteFetch: false,
  isWriteFetchSuccess: false,
  isAcceptFetch: false,
  isAcceptFetchSuccess: false,
  occupiedAppointmentIds: List()
}
export const mainCareuserMessagesConversationReducer = createReducer(
  mainCareuserMessagesConversationInitial,
  on(rdxMainCareuserMessagesConversationReadFetch, (state: IMainCareuserMessagesConversationReducer) => {
    return {
      ...state,
      isReadFetch: true,
      isReadFetchSuccess: false,
    }
  }),
  on(rdxMainCareuserMessagesConversationReadFetchSuccess, (state: IMainCareuserMessagesConversationReducer) => {
    return {
      ...state,
      isReadFetch: false,
      isReadFetchSuccess: true
    }
  }),
  on(rdxMainCareuserMessagesConversationMessages, (state: IMainCareuserMessagesConversationReducer) => {
    return {
      ...state,
      isMessages: true,
      isMessagesSuccess: false
    }
  }),
  on(rdxMainCareuserMessagesConversationMessagesSuccess, (state: IMainCareuserMessagesConversationReducer, action) => {
    return {
      ...state,
      isMessages: false,
      isMessagesSuccess: true,
      conversation: List(action.payload!.map(c => {
          return {
            ...c,
            careRequest: c.careRequest ? {
              id: c.careRequest.id,
              task: c.careRequest.task,
              description: c.careRequest.description,
              interval: c.careRequest.interval,
              careConsumerId: c.careRequest.careConsumerId,
              isCareConsumer: c.careRequest.isCareConsumer,
              appointment: c.careRequest.appointment ? {
                isOccupied: c.careRequest.appointment.isOccupied,
                id: c.careRequest.appointment.id,
                date: c.careRequest.appointment.date ? new Date(c.careRequest.appointment.date) : null,
                time: c.careRequest.appointment.time ? c.careRequest.appointment.time : null,
                isAccept: false,
                isAccepted: c.careRequest.appointment.isAccepted ? c.careRequest.appointment.isAccepted : false,
                compensation: c.careRequest.appointment.compensation ? c.careRequest.appointment.compensation : null,
                paymentRequest: c.careRequest.appointment.paymentRequest ? {
                  url: c.careRequest.appointment.paymentRequest.url
                } : null,
                review: c.careRequest.appointment.review ? {
                  stars: c.careRequest.appointment.review.stars
                } : null,
            } : null,
            date: new Date(c.date),
            careRequestId: c.careRequestId,
            shouldRenderTile: c.shouldRenderTile,
            alwaysRenderTile: c.alwaysRenderTile
          } : null
        }
      }))
    }
  }),
  on(rdxMainCareuserMessagesConversationAppointmentIdAdd, (state: IMainCareuserMessagesConversationReducer, action) => {
    return {
      ...state,
      occupiedAppointments: state.occupiedAppointmentIds.push(action.payload!)
    }
  }),
  on(rdxMainCareuserMessagesConversationWriteFetch, (state: IMainCareuserMessagesConversationReducer) => {
    return {
      ...state,
      isWriteFetch: true,
      isWriteFetchSuccess: false
    }
  }),
  on(rdxMainCareuserMessagesConversationWriteFetchSuccess, (state: IMainCareuserMessagesConversationReducer) => {
    return {
      ...state,
      isWriteFetch: false,
      isWriteFetchSuccess: true
    }
  }),
  // we need to get
  //what can we give in item to this function
  on(rdxMainCareuserMessagesConversationCaregiverAcceptFetch, (state: IMainCareuserMessagesConversationReducer, action) => {
    return {
      ...state,
      conversation:
      state.conversation.setIn([
        action.payload?.index,
        'careRequest',
        'appointment',
        'isAccept'], true)
    }
  }),
  on(rdxMainCareuserMessagesConversationCaregiverAcceptFetchSuccess, (state: IMainCareuserMessagesConversationReducer, action) => {
    return {
      ...state,
      conversation: state.conversation.setIn([
        action.payload!,
        'careRequest',
        'appointment',
        'isAccept'], false)
    }
  }),
  on(rdxMainCareuserMessagesConversationCaregiverAcceptFetchError, (state: IMainCareuserMessagesConversationReducer, action) => {
    return {
      ...state,
      conversation: state.conversation.setIn([action.payload!.index, 'careRequest', 'appointment', 'isAccept'], false)
    }
  })
)
