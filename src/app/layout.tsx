import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import LinkPage from "@/components/LinkPage";
import Navigator from "@/components/Navigator";
import ReduxProvider from "@/redux/provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className + " w-[90%] mx-auto h-screen"}>
        <ReduxProvider>
            <div className={"grid grid-cols-3 h-full rounded bg-gray-300 "}>
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
