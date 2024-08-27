import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import productReducer from './productSlice'



export const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch