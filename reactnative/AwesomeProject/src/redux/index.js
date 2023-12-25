import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { createStore } from 'redux'



// Reducers
import AuthhReducer from "./auth/reducers"; 

// Initalize  Persistent initial Configuration
const authPersistConfig = {
    key: "auth",
    storage: AsyncStorage,
  };

//  const rootReducer = combineReducers({
//    auth: persistReducer(authPersistConfig, AuthhReducer),
//   });

  const persistedAuthReducer = persistReducer(authPersistConfig, AuthhReducer);

  // const store = configureStore({
    // reducer: persistedAuthReducer,
    // devTools: process.env.NODE_ENV !== "production",
    // middleware:[thunk]

  // });
  
  const store = createStore(persistedAuthReducer)

  export const persistor = persistStore(store);


  
  export default store;
