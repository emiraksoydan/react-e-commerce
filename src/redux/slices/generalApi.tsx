import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'
import { ProductModal } from '../../modals/productModal'
import { CategoryModal } from '../../modals/categoryModal';
import { ApiResponse } from '../../modals/apiModal';



export const generalApi = createApi({
    reducerPath: 'generalApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7038/api' }),
    tagTypes: ["Categories", "Products"],

    endpoints: (builder) => ({
        getAllCategories: builder.query<ApiResponse<CategoryModal[]>, void>({
            query: () => '/Category/getallCategory',
            providesTags: ['Categories'],

        }),
        addCategory: builder.mutation<void, ApiResponse<CategoryModal>>({
            query: (newCategory) => ({
                url: '/Category/addcategory',
                method: 'POST',
                body: newCategory,
            }),
            invalidatesTags: ['Categories'],
        }),
        updateCategory: builder.mutation<void, ApiResponse<CategoryModal>>({
            query: (updateCategory) => ({
                url: '/Category/updatecategory',
                method: 'POST',
                body: updateCategory,
            }),
            invalidatesTags: ['Categories'],
        }),
        deleteCategory: builder.mutation<void, ApiResponse<CategoryModal>>({
            query: (deleteCategory) => ({
                url: '/Category/deletecategory',
                method: 'POST',
                body: deleteCategory,
            }),
            invalidatesTags: ['Categories'],
        }),
    })
})

export const {
    useGetAllCategoriesQuery,
    useLazyGetAllCategoriesQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = generalApi;