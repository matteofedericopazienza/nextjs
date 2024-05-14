"use client";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {CounterSliceActions} from "@/redux/slices/counterSlice";

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const counterValue: number = useAppSelector(state => state.CounterSliceReducer.value);


    return (
        <div>
            <p>{counterValue}</p>
            <button className={"border-2 p-3 rounded-xl bg-gray-800 text-white hover:bg-gray-600 active:bg-gray-700"}
                    onClick={() => dispatch(CounterSliceActions.increment())}>Login
            </button>
        </div>
    );
}
