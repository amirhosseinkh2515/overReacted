import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const loadState = () => {
    try {
        const isWindowClient = typeof window === "object";
        if (isWindowClient) {
            const serializedState = localStorage.getItem('reduxState');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        }
    } catch (error) {
        console.error('Error loading state from localStorage:', error);
        return undefined;
    }
};

const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (error) {
        console.error('Error saving state to localStorage:', error);
    }
};

const initialState = loadState();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
