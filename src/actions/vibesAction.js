import axios from 'axios'
var qs = require('qs');
// import history from '../../_helpers/history'
//import {history} from '../../components/app/App';
import  { API_URI } from '../_helpers/constants';
import {  VIBES_FAIL, VIBES_SUCCESS } from '../stores/types'

export function allVibes(userid) {

    return (dispatch) => {
        dispatch({
            type:VIBES_FAIL,
            registrationError:null
        })
        axios.post(`${API_URI}/fetchSharedetails`,qs.stringify({userid:userid}))
            .then(data => {
                dispatch({
                    type:VIBES_SUCCESS,
                    payload:data
                })
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:VIBES_FAIL,
                    error:err
                })
            })
        
    }
}



