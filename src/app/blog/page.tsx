import React from 'react';
import LinkPage from "@/components/LinkPage";

interface BlogProps {
    children?: React.ReactNode,
    params?: any,
    searchParams?: any,
}

export default function Blog(props: BlogProps): React.JSX.Element {

    return (
        <div>
            <main>


                <LinkPage fullPath={"/blog/post-1"}>Post 1</LinkPage>
                <LinkPage fullPath={"/blog/post-2"}>Post 2</LinkPage>

            </main>
        </div>
    );
}