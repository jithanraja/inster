import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import { reducer as notificationReducer } from 'reapop';
import notificationReducer from 'reducers/notificationReducer';
import loginReducer from 'reducers/loginReducer';
import storyReducer from 'reducers/storyReducer';
import vibesReducer from 'reducers/vibesReducer';
import venueReducer from 'reducers/venueReducer';
import locationReducer from 'reducers/locationReducer';
import friendsReducer from 'reducers/friendsReducer';
import messageReducer from 'reducers/messageReducer'

const reducers = combineReducers({
  form: formReducer,
  notifications: notificationReducer,
   UserData:loginReducer,
  Follower:vibesReducer,
  Story:storyReducer,
  location:locationReducer,
  venue:venueReducer,
  //system:systemReducer,
  Friends:friendsReducer,
  messageReducer: messageReducer,
  
});

export default reducers;
