import { 
  GET_ALL_VERIFIED_NOTES
} from '../stores/types'

const initialState = {
  ajaxPosting: false,
  data: {}
}

export default function (state = [initialState],  action) {
   
  switch (action.type) {
      case GET_ALL_VERIFIED_NOTES:
          return {...state, getAllVerifiedNotes: action.payload.rows }
      default:
          return state;
  }

}