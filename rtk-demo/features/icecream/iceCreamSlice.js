const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    //     builder: addCase(cakeActions.ordered, state => {
    //         state.numOfIceCreams--
    //     })
    // }
});

module.exports = iceCreamSlice.reducer
module.exports.IceCreamAction = iceCreamSlice.actions