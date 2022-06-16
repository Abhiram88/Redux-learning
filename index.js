const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(){
    return{
        type: 'CAKE_ORDERED',
        payload: 1,
    }
}

function restockCake(qty=1){
    return{
        type: 'CAKE_RESTOCKED',
        payload: qty
    }
}

function orderIceCream(){
    return{
        type: 'ICECREAM_ORDERED',
        payload: 1
    }
}

function restockIceCream(qty=1){
    return{
        type: 'ICECREAM_RESTOCKED',
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 10,
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case 'CAKE_ORDERED': 
        return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case 'CAKE_RESTOCKED':
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        
        default:
            return state
    }
}

const icecreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case 'ICECREAM_ORDERED': 
        return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        case 'ICECREAM_RESTOCKED':
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }

        
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

const store = createStore(rootReducer)

console.log("initial statement", store.getState())

const unsubscribe = store.subscribe(
    ()=>console.log("updated state", store.getState()
    ))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(2))

store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIceCream(5))

// const actions = bindActionCreators({orderCake, restockCake}, store.dispatch);
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.restockCake(3);

unsubscribe();
