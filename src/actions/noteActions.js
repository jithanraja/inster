 
import { SUBMITTING_CREATE_NOTE , RESET_CREATE_NOTE,GET_ALL_NOTES,GET_ALL_VERIFIED_NOTES } from 'stores/types';
import {getAllSiteNotes,insertSiteNotes,getAllVerifiedNotes} from '../services';
import { NavigationActions } from 'react-navigation'
export const submitNote = (description,stalltype,stallname) => {
  return async dispatch => {
    let is_general = 0;
    try {
      dispatch({
        type: SUBMITTING_CREATE_NOTE,
         
      })
      if(stalltype == "general") is_general = 1;
      const response = await insertSiteNotes(description,is_general,stallname);   
      // dispatch success
      if(response){ 
        //console.log(response);
        
       // this.props.navigation.navigate("Notes")
      }
    } catch (e) {
      //console.log(e)
       dispatch({
        type: RESET_CREATE_NOTE
      })
    } 
  }
};

export const getAllNotes = (vtypes) => {
  return async dispatch => {
    try{
    const response = await getAllSiteNotes(vtypes); 
      if(response) {
        dispatch({
          type: GET_ALL_NOTES,
          payload: response,
        });  
      }
    }
    catch(err) {
         //console.log(err)
        // dispatch(createError(error.response.data.error))
      };
  };
};

export const getAllStallVerifiedNotes = (vtypes,stallno) => {
  return async dispatch => {
    try{
      
    const response = await getAllVerifiedNotes(vtypes,stallno); 
      if(response) {
        dispatch({
          type: GET_ALL_VERIFIED_NOTES,
          payload: response,
        });  
      }
    }
    catch(err) {
         //console.log(err)
        // dispatch(createError(error.response.data.error))
      };
  };
};
