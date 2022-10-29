import { 
  
    VENUE_FAIL,
    VENUE_SUCCESS,
    LIKECOUNT_SUCCESS,
    LIKECOUNT_FAIL,
    ALLCOUNT_SUCCESS,
    ALLCOUNT_FAIL,
    ADD_VENUE_SUCCESS,
    ADD_VENUE_FAIL,
    VENUECOUNT_SUCCESS,
    VENUECOUNT_FAIL


 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) { 
        case VENUE_SUCCESS: 
            return { ...state, listVenue: action.payload.data }
        case VENUE_FAIL:
            return { ...state, Error: action.error }
        case LIKECOUNT_SUCCESS: 
            return { ...state, likeCount: action.payload.data }
        case LIKECOUNT_FAIL:
            return { ...state,likeCount:{}, Error: action.error }
        case ALLCOUNT_SUCCESS: 
            return { ...state, allCount: action.payload.data }
        case ALLCOUNT_FAIL:
            return { ...state,allCount:{}, Error: action.error }
        case VENUECOUNT_SUCCESS: 
            return { ...state, venueCount: action.payload.data }
        case VENUECOUNT_FAIL:
            return { ...state,venueCount:{}, Error: action.error }  
        case ADD_VENUE_SUCCESS: 
            return { ...state, addVenue: action.payload.data }
        case ADD_VENUE_FAIL:
            return { ...state,addVenue:{}, Error: action.error }     
        default:
            return state;

    }

}