const redux = require('redux')
const produce = require('immer').produce

const initialState = {
    name: 'ram',
    address:{
        street: 'RJ',
        city: 'HYD',
        state: 'TEL'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = street => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}

//Immer is useful in updating the complex states

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
        // return {
        //   ...state,
        //   address: {
        //     ...state.address,
        //     street: action.payload
        //   }
        // }

        // second argument is a function that receives the draft copy of the state. It's like we are updating a copy of the state.
        // like ...state
        return produce(state, (draft) => {
            draft.address.street = action.payload;
        });
    default: {
      return state
    }
  }
}

const store = redux.createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})
store.dispatch(updateStreet('456 Main St'))
unsubscribe()