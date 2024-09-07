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
            query: () => '/Category/getallcategory',
        }),
        getCategoryById: builder.query<ApiResponse<CategoryModal>, string>({
            query: (id) => `/Category/getcategorybyid/${id}`,
        }),
        addCategory: builder.mutation<CategoryModal, CategoryModal>({
            query: (newCategory) => ({
                url: '/Category/addcategory',
                method: 'POST',
                body: newCategory,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const { data: createdCategory } = await queryFulfilled;
                    console.log(createdCategory);
                    dispatch(
                        generalApi.util.updateQueryData('getAllCategories', undefined, (draft) => {
                            // `data` varsa yeni kategoriyi ekle
                            console.log(draft);
                            draft?.data.push(createdCategory);
                        })
                    );
                } catch (error) {
                    console.error('Error while adding category:', error);
                }
            },
        }),
        updateCategory: builder.mutation<CategoryModal, Partial<CategoryModal>>({
            query: (updateCategory) => ({
                url: '/Category/updatecategory',
                method: 'POST',
                body: updateCategory,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const { data: updatedProject } = await queryFulfilled;
                    console.log(args);
                    console.log(updatedProject);

                    dispatch(
                        generalApi.util.updateQueryData('getAllCategories', undefined, (draft) => {
                            let updatedcat = draft?.data.find((item) => item?.id === args?.id);
                            if (updatedcat) {
                                updatedcat.description = updatedProject?.description;
                                updatedcat.name = updatedProject?.name;
                                updatedcat.products = updatedProject?.products;
                                updatedcat.status = updatedProject?.status;
                            }
                        })
                    )
                    // dispatch(
                    //     generalApi.util.updateQueryData('getCategoryById', args.id as string, (draft) => {
                    //         let updatedlistobject = draft;
                    //         console.log(updatedlistobject);
                    //         console.log(args);

                    //         Object.assign(updatedlistobject, {
                    //             id: updatedProject?.id,
                    //             name: updatedProject?.name,
                    //             description: updatedProject?.description,
                    //             products: updatedProject?.products,
                    //             status: updatedProject?.status
                    //         })
                    //     })
                    // )

                } catch (error) {
                    console.log(error)
                }

            }
        }),
        deleteCategory: builder.mutation<void, Partial<CategoryModal>>({
            query: (deleteCategory) => ({
                url: '/Category/deletecategory',
                method: 'POST',
                body: deleteCategory,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    dispatch(
                        generalApi.util.updateQueryData('getAllCategories', undefined, (draft) => {
                            // delete
                            if (draft?.data) {
                                draft.data = draft.data.filter((delcat) => delcat.id !== args.id);
                            }
                        })
                    )

                } catch (error) {
                    console.log(error)
                }

            }
        }),
    })
})

export const {
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = generalApi;