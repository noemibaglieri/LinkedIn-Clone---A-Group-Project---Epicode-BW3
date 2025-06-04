import { configureStore } from "@reduxjs/toolkit";
import myProfileReducer from "../reducers/myProfileReducer";

const store = configureStore({
  reducer: {
    myProfileReducer,
  },
});

export default store;
