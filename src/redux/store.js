import {configureStore} from '@reduxjs/toolkit'
import shoppingReduecer from './shopping cart/shoppingSlice'
import movementsReducer from './shop movements/movementsSlice'
const store = configureStore({
    reducer: {
        shop: shoppingReduecer,
        movements :movementsReducer
    }
})


export default store;