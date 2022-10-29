import { 
  
    ADDSTORY_FAIL,
    ADDSTORY_SUCCESS,
   
 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) { 
        case ADDSTORY_SUCCESS: 
            return { ...state, addStory: action.payload.data }
        case ADDSTORY_FAIL:
            return { ...state, Error: action.error }
      
        default:
            return state;

    }

}