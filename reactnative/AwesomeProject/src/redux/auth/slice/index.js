import { createSlice } from "@reduxjs/toolkit";
import initialState from '../initialStates/index'


const authSlice = createSlice({

    name: 'auth',

    initialState,

    reducers: {

      login: (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
      },

      logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
      },
    },
  });
  
  const actions = authSlice.actions;
  const reducers = authSlice.reducer;
  export { actions, reducers };
  