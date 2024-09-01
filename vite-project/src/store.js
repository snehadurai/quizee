// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from './configureSlice/redux';
// const store = configureStore({
//     reducer: {
//       auth: authReducer,
//     },
//   });
  
//   export default store;


import { configureStore } from "@reduxjs/toolkit";
import authReducer from './configureSlice/redux';
const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });
  
  export default store;