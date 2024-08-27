import { createSlice } from "@reduxjs/toolkit/react"


export interface GenericArray<T> {
    arr?: T[],
    selectedType?: T,
    loading: boolean,
    isSuccess: boolean,
}

