const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice').IceCreamAction

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(4));

store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.ordered(2));
store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.restocked(14));

unsubscribe();