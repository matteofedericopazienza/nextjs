import {Types} from "mongoose";
import {unstable_cache} from "next/cache";
import React from "react";

const isDevelopment = process.env.NODE_ENV === 'development';


/**
 * Converts a single document object from a database model to a view model object.
 *
 * @template T - The type of the view model object.
 * @template U - The type of the document object.
 * @param {U | null} document - The document object to be converted.
 * @return {T | null} The converted view model object or null if input is null.
 */
export function toViewModelId<T extends { _id: string }, U extends { _id?: Types.ObjectId }>(document: U | null): T {
    if (document === null) return null as unknown as T;

    const {_id, ...rest} = document;
    return {
        _id: _id?.toString(),
        ...rest
    } as unknown as T;
}


/**
 * Converts an array of document objects from a database model to an array of view model objects.
 *
 * @template T - The type of the view model object.
 * @template U - The type of the document object.
 * @param {U[]} documents - Array of document objects to be converted.
 * @return {T[]} Array of converted view model objects.
 */
export function toViewModelsId<T extends { _id: string }, U extends { _id?: Types.ObjectId }>(documents: U[]): T[] {
    return documents.map(toViewModelId) as T[];
}


/**
 * Converts a view model object or a string representation of an object ID to a document object or an object ID.
 *
 *   @template T - The type of the document object or object ID.
 *   @template U - The type of the view model object or string representation of an object ID.
 *   @param {U} viewModel - The view model object or string representation of an object ID to be converted.
 *   @return {T} The converted document object or object ID.
 *
 *   @example
 *   // Example 1: Using Interfaces
 *   toObjectDocumentId<IBlogPost, VBlogPost>({ _id: "60aeb1b347b9b72d584bf3d0", name: "John", ... })
 *
 *   @example
 *   // Example 2: Converting a string ID to a document object
 *   const stringId = "60aeb1b347b9b72d584bf3d0";
 *   const convertedDocument = toObjectDocumentId<{_id: Types.ObjectId}, string>(stringId);
 *
 *   @example
 *   // Example 3: Converting a view model object to a document object
 *   const viewModel = { _id: "60aeb1b347b9b72d584bf3d0", name: "John" };
 *   const convertedDocument = toObjectDocumentId<{_id: Types.ObjectId, name: string}, { _id: string, name: string}>(viewModel);
 */

export function toObjectDocumentId<T extends { _id: Types.ObjectId } | Types.ObjectId, U extends {
    _id: string
} | string>(viewModel: U): T | Types.ObjectId {

    if (typeof viewModel === "string") {
        return new Types.ObjectId(viewModel);

    }

    if (typeof viewModel === "object") {
        const {_id, ...rest} = viewModel;
        return {
            _id: new Types.ObjectId(_id),
            ...rest,
        } as unknown as T;
    }

    return null as unknown as T;
}


