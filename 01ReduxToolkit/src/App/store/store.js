import { configureStore } from '@reduxjs/toolkit';
import reducer, { saveStateToLocalStorage } from '../features/personalInfo/authSlice'; // Adjust the import path as necessary

export const store = configureStore({
    reducer: {
        customer: reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveStateToLocalStorage),
});
