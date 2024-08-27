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


export const getAllProduct = createAsyncThunk('getallproducts', async () => {
    const responsedata = await apigetData("https://localhost:7038/api/Product/getall");
    return responsedata;
})
export const AddProduct = createAsyncThunk('getallproducts', async () => {

    const addedData = await apipostData("https://localhost:7038/api/Product/add", "");
    return addedData;
})


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state: GenericArray<ProductModal>, action: PayloadAction<Array<ProductModal>>) => {
            state.isSuccess = true;
            state.loading = false;
            state.arr = action.payload;
        });
        builder.addCase(getAllProduct.pending, (state: GenericArray<ProductModal>) => {
            state.isSuccess = false;
            state.loading = true;
        });
        builder.addCase(getAllProduct.rejected, (state: GenericArray<ProductModal>) => {
            state.isSuccess = false;
            state.loading = false;
        })
    },
})
export const { } = productSlice.actions

export default productSlice.reducer

