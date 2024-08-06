import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    image: null,
    name: '',
    email: '',
    phone: '',
}; 

const savedState = JSON.parse(localStorage.getItem('customerInfo'));
const customerInitialState = savedState ? savedState : initialState;

const authSlice = createSlice({ 
    name: 'customer',  
    initialState: customerInitialState, 
    reducers: { 
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        resetInfo: (state) => initialState,
    }, 
});

export const { setImage, setName, setEmail, setPhone, resetInfo } = authSlice.actions;
export default authSlice.reducer;

// Middleware to save state to localStorage whenever it changes
export const saveStateToLocalStorage = store => next => action => {
    const result = next(action);
    localStorage.setItem('customerInfo', JSON.stringify(store.getState().customer));
    return result;
};
