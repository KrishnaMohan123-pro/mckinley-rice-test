import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products";
const store = configureStore({
    reducer: { products: productReducer },
});

export { store };
