import { configureStore } from '@reduxjs/toolkit';

import reduxLogger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream : iceCreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
});

export default store;

// config store function will add some middleware automatically. that is why we use concat