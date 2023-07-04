import  userDetails  from "../slice/userDetailsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    app: userDetails,
  },
});
