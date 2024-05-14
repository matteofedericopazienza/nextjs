"use client"

import React from 'react';

interface LoadingPageProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default function LoadingPage(props: LoadingPageProps): React.JSX.Element {
    return (
        <div>
            <h1>Loading ...</h1>
        </div>
    );
}