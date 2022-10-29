import axios from 'axios'
var qs = require('qs');
// import history from '../../_helpers/history'
//import {history} from '../../components/app/App';
import  { API_URI } from '../_helpers/constants';
import {  LOCATION_FAIL, LOCATION_SUCCESS } from '../stores/types'

export function allDistance(lattitude,longitude) {

    return (dispatch) => {
        dispatch({
            type:LOCATION_FAIL,
            Error:null
        })
        //console.log(lattitude,longitude)
        axios.post(`${API_URI}/getDistance`,{lattitude:lattitude,longitude:longitude,distance:5})

            .then(data => {
             
             // //console.log(data)
                dispatch({
                    type:LOCATION_SUCCESS,
                    payload:data
                })
              //  history.push('/signin')
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:LOCATION_FAIL,
                    error:err
                })
            })

    }

}



