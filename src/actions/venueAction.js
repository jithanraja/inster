import axios from 'axios'
var qs = require('qs');
import  { API_URI } from '../_helpers/constants';
import {  VENUE_FAIL, VENUE_SUCCESS ,LIKECOUNT_FAIL,LIKECOUNT_SUCCESS,ALLCOUNT_SUCCESS,ALLCOUNT_FAIL,VENUECOUNT_SUCCESS,VENUECOUNT_FAIL,ADD_VENUE_FAIL,ADD_VENUE_SUCCESS} from '../stores/types'

export function allVenue(venue) {

    return (dispatch) => {
        dispatch({
            type:VENUE_FAIL,
            registrationError:null
        })
        axios.post(`${API_URI}/allVenue`, qs.stringify(venue))
            .then(data => {
                dispatch({
                    type:VENUE_SUCCESS,
                    payload:data
                })
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:VENUE_FAIL,
                    error:err
                }) 
            })
    }

}

export function AddimageVenue(venue) {
    return (dispatch) => {
        dispatch({
            type:ADD_VENUE_FAIL,
            registrationError:null
        })
        //console.log("query string length",venue.image)
        const fd = new FormData();
        
        fd.append('image', {uri:venue.image, name:'test.jpg', type:'image/jpg'});
        //console.log(fb)
        axios.post(`${API_URI}/imageupload` , fd
        )         
            .then(data => {
               //console.log("data", data)
                dispatch({
                    type:ADD_VENUE_SUCCESS,
                    payload:data
                }) 
            }).catch(err => { 
                //console.log(err)
                dispatch({
                    type:ADD_VENUE_FAIL,
                    error:err
                })
            })
    }
}


export function AddVenue(venue) {
    return (dispatch) => {
        dispatch({
            type:ADD_VENUE_FAIL,
            registrationError:null
        })
        ////console.log(qs.stringify(venue))
        axios.post(`${API_URI}/addVenue`, qs.stringify(venue))

            .then(data => {
                //console.log("success",venue.image)
                dispatch({
                    type:ADD_VENUE_SUCCESS,
                    payload:data,
                    image:venue.image
                })
                //return AddimageVenue(venue)
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:ADD_VENUE_FAIL,
                    error:err
                })
            })
    }
}

export function venueStoryCount() {

    return (dispatch) => {
        dispatch({
            type:VENUECOUNT_FAIL,
            Error:null
        })
      
        axios.get(`${API_URI}/fetchVenueStoryCount` )
              
            .then(data => {
              //  localStorage.setItem('user', JSON.stringify(data.data));
          
            //console.log("inside venue count",data)
                dispatch({
                    type:VENUECOUNT_SUCCESS,
                    payload:data
                })
              //  history.push('/signin')
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:VENUECOUNT_FAIL,
                    error:err
                })
            })

    }

}


export function likeCount(like) {
    return (dispatch) => {
        dispatch({
            type:LIKECOUNT_FAIL,
            registrationError:null
        })
        axios.post(`${API_URI}/likescount`, qs.stringify({id:like.id,status:like.status=="0"?"1":"0"}) )
            .then(data => {
                dispatch({
                    type:LIKECOUNT_SUCCESS,
                    payload:data
                })
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:LIKECOUNT_FAIL,
                    error:err
                })
            })
    }
}




export function allcounts(like) {
    return (dispatch) => {
        dispatch({
            type:LIKECOUNT_FAIL,
            registrationError:null
        })
        axios.post(`${API_URI}/fetchvenuestorycount`, qs.stringify({id:like.id}) )
            .then(data => {
                
                dispatch({
                    type:ALLCOUNT_SUCCESS,
                    payload:data
                })
            }).catch(err => {
                //console.log(err)
                dispatch({
                    type:ALLCOUNT_FAIL,
                    error:err
                })
            })
    }
}


