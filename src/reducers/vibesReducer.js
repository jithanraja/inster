import { 
  
    VIBES_FAIL,
    VIBES_SUCCESS

 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) { 
        case VIBES_SUCCESS: 
            return { ...state, listFollowers: action.payload.data }
        case VIBES_FAIL:
            return { ...state, Error: action.error }
        default:
            return state;
    }

}