'use client'
import React from 'react';
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };
    fullPath: string;
    className?: string;


}


export default function NavLink(props: NavLinkProps): React.JSX.Element {
    let pathname = usePathname();

    const classes = clsx(
        "block hover:underline " + props.className, {
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