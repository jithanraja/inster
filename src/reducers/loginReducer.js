import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    REGISTRATION_FAIL,
    REGISTRATION_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL

 } from '../stores/types'

export default function (state = {}, action) {
    switch (action.type) {

        case LOGIN_SUCCESS:
           // //console.log(action.payload)
            return { ...state, loggingIn: true, login: action.payload, loginError: null }
        case LOGIN_FAIL:
            return { ...state, loggingIn: false, loginError: action.error }
        case REGISTRATION_SUCCESS:
          
            return { ...state, listUser: action.payload.data }

        case REGISTRATION_FAIL:
            return { ...state, registrationError: action.error }

        case GET_USER_SUCCESS:
    
            return { ...state, getProfile: action.payload }

        case GET_USER_FAIL:
            return { ...state,Error: action.error }
        
        case EDIT_USER_SUCCESS:
    
            return { ...state, editUser: action.payload }
    
        case EDIT_USER_FAIL:
            return { ...state,Error: action.error }
    

        default:
            return state;
    }

}