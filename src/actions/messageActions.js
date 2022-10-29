import {
  SEND_MESSAGE,
  Get_Inbox_Messages_For_Landlord,
  Get_Message_Details
} from "../types";
import  { API_URI, PROPERTY } from '../../_helpers/constants';
import axios from "axios";
import {history} from '../../components/app/App';
import { notify } from 'reapop';



export const messageAdd = (message) => {
  return async dispatch => {
    const response = await axios.post(`${API_URI}/user/Message/Add`, message);
    dispatch({
      type: SEND_MESSAGE,
      result: response,
    });
  }
};


export const getInboxMessagesForLandlord = (userid) => {
 return dispatch => {
    axios.get(`${API_URI}/user/${userid}/GetInboxMessagesForLandlord`)
      .then(response => {
        dispatch({
          type: Get_Inbox_Messages_For_Landlord,
          payload: response,
        });  
      }).catch(error=> {
        // dispatch(createError(error.response.data.error))
      });
  };
};

export const getMessageDetails = (messageid) => {
 return dispatch => {
    axios.get(`${API_URI}/user/${messageid}/GetMessageDetails`)
      .then(response => {
        dispatch({
          type: Get_Message_Details,
          payload: response,
        });  
      }).catch(error=> {
        // dispatch(createError(error.response.data.error))
      });
  };
};
