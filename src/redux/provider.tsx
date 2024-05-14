'use client'


import React from 'react';
import store from './store';
import {Provider} from "react-redux";

interface ReduxProviderProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };
    
}

export default function ReduxProvider(props: ReduxProviderProps) {
    return (
        <Provider store={store}>
            {props.children}
            </Provider>
    );
}