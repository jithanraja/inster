// // reformat this code with indy nodejs manner
// import { createStore, applyMiddleware, compose , combineReducers} from 'redux';
// import reduxThunk from 'redux-thunk';
// import reducers from 'reducers';

// import { persistStore, persistReducer } from "redux-persist";
// //import storage from "redux-persist/lib/storage";
// import { AsyncStorage } from 'react-native';  
// import updateReducer from "../../src/features/ReminderSet/reducers/updateReducer";
// // register middlewares
// const middleware = applyMiddleware(reduxThunk);
// // create enhancer
// const enhancer = compose(middleware, (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// // create store
// //const store = createStore(reducers, enhancer);
// const store = createStore(reducers, middleware);

// // const persistConfig = {
// //     key: "root",
// //     storage:AsyncStorage
// //     //  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// //   };
// //   const rootReducer = combineReducers({
// //     updateReducer: updateReducer
// //   });
  
// //   const pReducer = persistReducer(persistConfig, rootReducer);
  
// //   export const store = createStore(pReducer);
// //   export const persistor = persistStore(store);
  
// export default store;


// reformat this code with indy nodejs manner
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from 'reducers';

// register middlewares
const middleware = applyMiddleware(reduxThunk);
// create enhancer
const enhancer = compose(middleware, (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// create store
//const store = createStore(reducers, enhancer);
const store = createStore(reducers, middleware);

export default store;
