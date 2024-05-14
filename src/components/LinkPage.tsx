'use client'
import React from 'react';
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

interface LinkPageProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };
    fullPath: string;


}


export default function LinkPage(props: LinkPageProps): React.JSX.Element {
    let pathname = usePathname();

    const classes = clsx(
        "block hover:underline", {
            'text-blue-500': pathname.endsWith(props.fullPath),
        });

    return (
        <Link href={{pathname: props.fullPath, query: props.searchParams}}
              className={classes}>
            <p>
                {props.children}
            </p>
        </Link>
    );
}