import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from 'redux-persist/es/persistStore';


const persistConfig = {
    key: 'user',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })

})
export const persistor = persistStore(store);
