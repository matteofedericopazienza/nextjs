import NavLink from "@/components/NavLink";
import React from "react";

export default function Navigator() {

    return <>
        <NavLink fullPath={"/"}>Home</NavLink>
        <NavLink fullPath={"/blog"}>Blog</NavLink>
        <NavLink fullPath={"/scale"}>Scale</NavLink>
        <NavLink fullPath={"/reliability"}>Reliability</NavLink>
        <NavLink fullPath={"/performance"}>Performance</NavLink>
    </>;
}
