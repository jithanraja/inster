import axios from 'axios'
var qs = require('qs');
// import history from '../../_helpers/history'
//import {history} from '../../components/app/App';
import  { API_URI } from '../_helpers/constants';
import {  ADDSTORY_FAIL, ADDSTORY_SUCCESS } from '../stores/types'

// export function allVenue() {

//     return (dispatch) => {
//         dispatch({
//             type:VENUE_FAIL,
//             registrationError:null
//         })
        
//         axios.get(`${API_URI}/allVenue`)

//             .then(data => {
             
//            //   //console.log(data)
//                 dispatch({
//                     type:VENUE_SUCCESS,
//                     payload:data
//                 })
//               //  history.push('/signin')
//             }).catch(err => {
//                 //console.log(err)
//                 dispatch({
//                     type:VENUE_FAIL,
//                     error:err
//                 })
//             })

//     }

// }


export function addStory(story) {

    return (dispatch) => {
        dispatch({
            type:ADDSTORY_FAIL,
            registrationError:null
        })
      
        axios.post(`${API_URI}/Insert_Storyboard`, qs.stringify(story) )

            .then(data => {
                    //console.log(data)
                dispatch({
                    type:ADDSTORY_SUCCESS,
                    payload:data
                })
              //  history.push('/signin')
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:ADDSTORY_FAIL,
                    error:err
                })
            })

    }

}



