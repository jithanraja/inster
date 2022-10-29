import { 
  
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAIL,
   GET_STORY_SUCCESS,
   GET_STORY_FAIL,
   GET_ALL_FRIENDS_SUCCESS,
   GET_ALL_FRIENDS_FAIL
 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) { 
        case GET_FRIENDS_SUCCESS: 
            return { ...state, listFriends: action.payload.data }
        case GET_FRIENDS_FAIL:
            return { ...state, Error: action.error }
        case GET_STORY_SUCCESS: 
            return { ...state, listStory: action.payload.data }
        case GET_STORY_FAIL:
            return { ...state, Error: action.error }
        case GET_ALL_FRIENDS_SUCCESS: 
            return { ...state, getAllFollowerFolloWing: action.payload.data }
        case GET_ALL_FRIENDS_FAIL:
            return { ...state, Error: action.error }
        default:
            return state;

    }

}