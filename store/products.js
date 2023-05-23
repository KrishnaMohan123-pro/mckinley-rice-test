import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    isLoading: false,
    products: [],
};

export const getProducts = createAsyncThunk(
    'fetch/products',
    async ({ pageNumber }) => {
        const response = await fetch(
            'https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=' +
                pageNumber
        );
        const data = await response.json();
        return data;
    }
);
const ProductsSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {
        getName: (state) => {
            state.products = ['Krishna'];
        },
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.products = state.products.concat(
                action.payload.data.recruits
            );
            state.isLoading = false;
        },
        [getProducts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false;
        },
    },
});

// export const { getName, fetchProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
