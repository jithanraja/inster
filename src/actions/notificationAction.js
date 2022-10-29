import axios from 'axios'
var qs = require('qs');
// import history from '../../_helpers/history'
//import {history} from '../../components/app/App';
import  { API_URI } from '../_helpers/constants';
import {  NOTIFICATION_FAIL, NOTIFICATION_SUCCESS } from '../stores/types'

export function allNotification(userid) {

    return (dispatch) => {
        dispatch({
            type:NOTIFICATION_FAIL,
            registrationError:null
        })
        
        axios.post(`${API_URI}/allnotifications`,qs.stringify({userid:userid}))

            .then(data => {
             
           //   //console.log(data)
                dispatch({
                    type:NOTIFICATION_SUCCESS,
                    payload:data
                })
              //  history.push('/signin')
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:NOTIFICATION_FAIL,
                    error:err
                })
            })

    }

}



