import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "axios";
import { ApiParams } from "../modals/apiParams";






export const apipostData = async (url: string, postData: any): Promise<any> => {
    try {
        const response = await axios.post(url, postData);
        return response.data;
    } catch (error) {
        //Arayüzde hata göster
    }
}
export const apigetData = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        //Arayüzde hata göster
    }
}


// const handlePending = (state: object) => {
//     state.loading = true;
//     state.error = null;
// };

// const handleFulfilled = (state: DataState, action: PayloadAction<any>) => {
//     state.loading = false;
//     state.data = action.payload;
// };

// const handleRejected = (state: DataState, action: PayloadAction<string>) => {
//     state.loading = false;
//     state.error = action.payload;
// };