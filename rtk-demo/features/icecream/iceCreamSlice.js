const createSlice = require('@reduxjs/toolkit').createSlice

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
    }
});

module.exports = iceCreamSlice.reducer
module.exports.IceCreamAction = iceCreamSlice.actions