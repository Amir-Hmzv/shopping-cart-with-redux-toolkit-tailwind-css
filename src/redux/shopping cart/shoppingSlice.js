import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getProducts = createAsyncThunk('get/products' , async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`)

    return response.data
})



const initialState = {
    items : [],
    loading : false,
    error: ''
}


const shoppingSlice = createSlice({
name: 'shopping cart',
initialState,
extraReducers:{
[getProducts.pending] : (state) => {
    state.loading = true
},
[getProducts.fulfilled] : (state,{payload}) => {
    state.items = payload
    state.loading = false
},
[getProducts.rejected] : (state) => {
state.error = 'something went wrong.....'
state.loading = false
}
}
})




export default shoppingSlice.reducer