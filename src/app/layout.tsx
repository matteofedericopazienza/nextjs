import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import Navigator from "@/components/Navigator";
import ReduxProvider from "@/redux/provider";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/dev";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
        <body className={inter.className + " w-[60%] min-w-[320px] mx-auto h-screen"}>

        <ReduxProvider>


            <div style={{"minHeight": "max(50%, 500px)"}} className={"grid grid-cols-3 rounded bg-gray-300 "}>
                <div className={"bg-gray-800 text-white p-5 rounded"}>
                    <div className={"flex flex-col gap-3"}>
                        <Navigator/>
                    </div>
                </div>
                <div className={"col-span-2 p-5"}>
                    {children}
                </div>
            </div>
        </ReduxProvider>
        </body>
        </html>
    );
}
