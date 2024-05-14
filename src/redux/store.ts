import { configureStore } from '@reduxjs/toolkit';
import {CounterSlice} from "@/redux/slices/counterSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const store = configureStore({
  reducer: {
    CounterSliceReducer: CounterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
