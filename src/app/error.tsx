"use client"
import React from 'react';

interface ErrorPageProps {
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };
    error?: Error;

}

export default function ErrorPage(props: ErrorPageProps): React.JSX.Element {
    return (
        <div>
            <h1>{props.error?.name}</h1>

            <code className={"my-4 block text-red-800 font-bold"}>{props.error?.message}</code>

            <code className={"mb-4 block"}>{props.error?.stack}</code>
        </div>
    );
}