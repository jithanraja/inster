import { 
  
    LOCATION_FAIL,
    LOCATION_SUCCESS

 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) { 
        case LOCATION_SUCCESS: 
         // //console.log(state)
            return { ...state, listLocation: action.payload.data }
        case LOCATION_FAIL:
            return { ...state, Error: action.error }
        default:
            return state;
    }

}