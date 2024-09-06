import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import productReducer from './productSlice'
import { generalApi } from './generalApi'
import { setupListeners } from '@reduxjs/toolkit/query'



export const store = configureStore({
    reducer: {
        // products: productReducer,
        [generalApi.reducerPath]: generalApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(generalApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch