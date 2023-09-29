import { configureStore } from "@reduxjs/toolkit";
import { deviceApi } from "../../apis";
import { deviceReducer } from "./deviceSlice";

const store = configureStore({
    reducer: {
        device: deviceReducer,

    [deviceApi.reducerPath] : deviceApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(deviceApi.middleware),
});

export const RootState = store.getState;
export default store;
