'use client';
import React from 'react';
import {MdDelete} from "react-icons/md";
import {deleteBlogPostById} from "@/actions/blogPostFunctions";

interface DeleteIconButtonProps {
    id: string;

}

function DeleteIconButton(props: DeleteIconButtonProps) {
    return (
        <>
            <MdDelete className={"text-red-600 cursor-pointer"}
                      onClick={() => deleteBlogPostById({ id: props.id })}/>
        </>
    );
}

export default DeleteIconButton