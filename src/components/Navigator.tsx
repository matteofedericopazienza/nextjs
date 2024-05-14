import LinkPage from "@/components/LinkPage";
import React from "react";

export default function Navigator() {
    return <>
        <LinkPage fullPath={"/"}>Home</LinkPage>
        <LinkPage fullPath={"/blog"}>Blog</LinkPage>
        <LinkPage fullPath={"/scale"}>Scale</LinkPage>
        <LinkPage fullPath={"/reliability"}>Reliability</LinkPage>
        <LinkPage fullPath={"/performance"}>Performance</LinkPage>
    </>;
}
