import axios from 'axios'
var qs = require('qs');
// import history from '../../_helpers/history'
//import {history} from '../../components/app/App';
import  { API_URI } from '../_helpers/constants';
import {  GET_FRIENDS_FAIL, GET_FRIENDS_SUCCESS,GET_STORY_SUCCESS,GET_STORY_FAIL,GET_ALL_FRIENDS_FAIL,GET_ALL_FRIENDS_SUCCESS} from '../stores/types'

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


export function getAllFriends(userid) {

    return (dispatch) => {
        dispatch({
            type:GET_FRIENDS_FAIL,
            registrationError:null
        })
      
        axios.post(`${API_URI}/getfollowersdetail`, qs.stringify({userid:userid}) )

            .then(data => {
                //console.log(data)
                dispatch({
                    type:GET_FRIENDS_SUCCESS,
                    payload:data
                })
              
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:GET_FRIENDS_FAIL,
                    error:err
                })
            })

    }

}


export function getfollowingStory(userid) {

    return (dispatch) => {
        dispatch({
            type:GET_STORY_FAIL,
            registrationError:null
        })
      
        axios.post(`${API_URI}/fetchFollowingDetails`, qs.stringify({userid:userid}) )

            .then(data => {
            
                dispatch({
                    type:GET_STORY_SUCCESS,
                    payload:data
                })
              
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:GET_STORY_FAIL,
                    error:err
                })
            })

    }

}



export function getAllFollowerFollowing() {

    return (dispatch) => {
        dispatch({
            type:GET_ALL_FRIENDS_FAIL,
            registrationError:null
        })
      
        axios.get(`${API_URI}/allfollowers` )

            .then(data => {
                //console.log(data)
                dispatch({
                    type:GET_ALL_FRIENDS_SUCCESS,
                    payload:data
                })
              
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:GET_ALL_FRIENDS_FAIL,
                    error:err
                })
            })

    }

}
