import { configureStore } from "@reduxjs/toolkit";
import myProfileReducer from "./myProfileReducer";

const store = configureStore({
  reducer: {
    myProfile: myProfileReducer,
  },
});

export default store;
