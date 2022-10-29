import { 
  SEND_MESSAGE,
  Get_Inbox_Messages_For_Landlord,
  Get_Message_Details
 } from '../stores/types'

const initialState = {
  message: '',
  success: false,
  ajaxPosting: false,
  data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
          return { ...state, success: true, message: "Message Send Successfully..!" }
        case Get_Inbox_Messages_For_Landlord:
          return { getInboxMessagesForLandlord: action.payload }
        case Get_Message_Details:
          return { getMessageDetails: action.payload }  
        default:
            return state;
    }

}
