import {createSlice, Slice} from '@reduxjs/toolkit';


type CounterSliceStateType = {
    value: number
}

const initialState: CounterSliceStateType = {
    value: 0
};

 const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const CounterSliceActions = CounterSlice.actions;
export default CounterSlice.reducer;
export type {CounterSliceStateType}
export {CounterSlice}

