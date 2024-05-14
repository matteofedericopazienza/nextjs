import React from 'react';
import Image from "next/image";
import foodImage from "@/app/assets/food_image.jpg";
import classes from "./blog.module.css";

interface LayoutProps {
    children?: React.ReactNode;
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] };

}

export default function Layout(props: LayoutProps): React.JSX.Element {
    return (
        <div>
            <div className={classes.blogHeader}>
                <Image
                    src={foodImage}

                    alt={"image"}
                    className={classes.roundedImg}
                />
                <h1 >Blog Page</h1>
            </div>
            {props.children}
        </div>


    );
}

