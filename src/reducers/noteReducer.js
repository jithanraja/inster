import { 
  SUBMITTING_CREATE_NOTE, 
  RESET_CREATE_NOTE,
  

} from '../stores/types'


const initialState = {createnote:false};

const noteReducer = (state=[initialState], action) => {
  //console.log(action.type)
  switch(action.type) {
    case SUBMITTING_CREATE_NOTE: {
       return {createnote:true}
    }
    case RESET_CREATE_NOTE: {
      return { createnote: false}
    }
    default:
        return state;

  }
};

export default noteReducer;
