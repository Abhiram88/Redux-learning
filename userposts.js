const redux = require('redux');
const createStore = redux.createStore;

const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware

const allposts = `https://jsonplaceholder.typicode.com/posts/`;
const allUsers = `https://jsonplaceholder.typicode.com/users/`;

const initialState = {
    loading: true,
    users: [],
    posts: [],
    error: '',
}

const getUser = () =>{
    return{
        type: 'GET_USER',
    }
}


const userRequestSuccess = (users) =>{
    return{
        type: 'USER_REQUEST_SUCCESS',
        payload: users,
    }
}


const userRequestFailed = (error) =>{
    return{
        type: 'USER_REQUEST_FAILED',
        payload: error,
    }
}


const postRequestSuccess = (posts) =>{
    return{
        type: 'POST_REQUEST_SUCCESS',
        payload: posts,
    }
}


const postRequestFailed = (error) =>{
    return{
        type: 'POST_REQUEST_FAILED',
        payload: error,
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_USER':
            return{
                ...state,
                loading: true,
            }
        
        case 'USER_REQUEST_SUCCESS':
            return{
                ...state,
                loading: false,
                users: action.payload,
            }
        
        case 'USER_REQUEST_FAILED':
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        case 'POST_REQUEST_SUCCESS':
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        case 'POST_REQUEST_FAILED':
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(getUser());
        axios
        .get(allUsers)
        .then((response) => {
            const users = response.data.map(user => user.id);
            dispatch(userRequestSuccess(users));
        })
        .catch(err => {
            dispatch(userRequestFailed(err.message));
        })
        
        axios
        .get(allposts)
        .then((response) => {
            const posts = response.data.map(post => [post.id, post.body]);
            dispatch(postRequestSuccess(posts));
        })
        .catch(err => {
            dispatch(postRequestFailed(err.message));
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());