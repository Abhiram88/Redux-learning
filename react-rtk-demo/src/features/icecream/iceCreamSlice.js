import {ordered as CakeOrdered} from '../cake/cakeSlice';

import { createSlice } from '@reduxjs/toolkit';

const iceCreamInitialState = {
    numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: iceCreamInitialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCreams -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.numOfIceCreams--
    //     } 
    // },

    // extraReducers: (builder) => {
    //     builder: addCase(cakeOrdered, state => {
    //         state.numOfIceCreams--
    //     })
    // }
});

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions