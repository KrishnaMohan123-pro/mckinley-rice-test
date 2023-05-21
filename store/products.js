import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    products: [],
};
const products = createSlice({
    name: "show",
    initialState,
    reducers: {
        fetchProducts: createAsyncThunk("products/fetchProducts", async () => {
            const response = await client.get(
                "https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=1"
            );
            return response.data;
        }),
    },
});

export const { fetchProducts } = products.actions;
export default products.reducer;
