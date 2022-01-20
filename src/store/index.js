import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./teamSlice";

const store = configureStore({
  reducer: {
    team: teamSlice.reducer,
  },
});

export default store;
