import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { GenericArray } from "../../modals/genericArray";
import { ProductModal } from "../../modals/productModal";
import { apigetData, apipostData } from "../../functions/ReduxHelperFunctions";
import { act } from "react";



const initialState: GenericArray<ProductModal> = {
    arr: [],
    selectedType: undefined,
    loading: false,
    isSuccess: true, // Başlangıçta yüklenme durumu false
}




export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    },
})
export const { } = productSlice.actions

export default productSlice.reducer

