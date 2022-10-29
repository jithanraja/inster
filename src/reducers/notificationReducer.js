import { 
  
    NOTIFICATION_FAIL,
    NOTIFICATION_SUCCESS

 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) { 
        case NOTIFICATION_SUCCESS: 
        //console.log(action.payload)
            return { ...state, listNotification: action.payload.data }
        case NOTIFICATION_FAIL:
            return { ...state, listNotification: {}, Error: action.error }
        default:
            return state;
    }

}