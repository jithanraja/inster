import axios from 'axios'
var qs = require('qs');
// import history from '../../_helpers/history'
//import {history} from '../../components/app/App';
import  { API_URI } from '../_helpers/constants';
import { LOGIN_SUCCESS, LOGIN_FAIL,LOG_OUT, REGISTRATION_FAIL, REGISTRATION_SUCCESS,GET_USER_SUCCESS,GET_USER_FAIL,EDIT_USER_SUCCESS,EDIT_USER_FAIL } from '../stores/types'

export function register(user) {

    return (dispatch) => {
        dispatch({
            type:REGISTRATION_FAIL,
            registrationError:null
        })
        //console.log(user)
        axios.post(`${API_URI}/addmanageuser`, qs.stringify(user))

            .then(data => {
              //  localStorage.setItem('user', JSON.stringify(data.data));
              //console.log(data)
                dispatch({
                    type:REGISTRATION_SUCCESS,
                    payload:data
                })
              //  history.push('/signin')
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:REGISTRATION_FAIL,
                    error:err
                })
            })

    }

}


export function login(userName, password) {

    return (dispatch) => {
        dispatch({
            type:LOGIN_FAIL,
            loginError:null
        })
        //console.log(userName,password)
        axios.post(`${API_URI}/login`, qs.stringify({ email:userName, password:password }))
            .then(data => {
                ////console.log(data.data)
                //localStorage.setItem('user', JSON.stringify(data.data));
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:data.data
                })
              //  history.push('/')
            }).catch(err => {
                dispatch({
                    type:LOGIN_FAIL,
                    error:err
                })
            })

    }

}

export function getUser(userid) {

    return (dispatch) => {
        dispatch({
            type:GET_USER_FAIL,
            loginError:null
        })
        //console.log(userid)
        axios.post(`${API_URI}/fetchUserdetails`, qs.stringify({ userid:userid }))
            .then(data => {
                ////console.log(data.data)
                //localStorage.setItem('user', JSON.stringify(data.data));
                dispatch({
                    type:GET_USER_SUCCESS,
                    payload:data.data
                })
              //  history.push('/')
            }).catch(err => {
                dispatch({
                    type:GET_USER_FAIL,
                    error:err
                })
            })

    }

}



export function editUser(user) {

    return (dispatch) => {
        dispatch({
            type:EDIT_USER_FAIL,
            loginError:null
        })
     //   //console.log(user)
        axios.post(`${API_URI}/editmanageuser`, qs.stringify(user))
            .then(data => {
               // //console.log(data)
                //localStorage.setItem('user', JSON.stringify(data.data));
                dispatch({
                    type:EDIT_USER_SUCCESS,
                    payload:data.data
                })
              //  history.push('/')
            }).catch(err => {
                dispatch({
                    type:EDIT_USER_FAIL,
                    error:err
                })
            })

    }

}

export function logOut(){
    return dispatch => {
        localStorage.removeItem('user');
        dispatch({
            type:LOG_OUT,
            user:{}
        })
       // history.push('/login')
    }
}