import React from 'react';

interface NotFoundPageProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default function NotFoundPage(props: NotFoundPageProps): React.JSX.Element {
    return (
        <div>
            <h1>Not Found</h1>
        </div>
    );
}