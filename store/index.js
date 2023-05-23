import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products';
import { useDispatch, useSelector } from 'react-redux';
const store = configureStore({
    reducer: { products: productReducer },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

export { store };
