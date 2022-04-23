import {
    createSlice
} from '@reduxjs/toolkit'








const initialState = {
    selectedItems: [],
    total: 0,
    chekout: false,
    itemsCounter: 0
}



const movementsSlice = createSlice({
    name: 'movement',
    initialState,
    reducers: {
        addToCart : (state,{payload}) => {
            const itemExist = !state.selectedItems.find(item => item.id === payload.id)
            if (itemExist) {
                state.selectedItems.push({
                    ...payload,
                    quantity: 1
                })
            }
            // state.itemsCounter += 1
            state.itemsCounter  = state.selectedItems.reduce((total,product) => total + product.quantity,0)
            state.total  = state.selectedItems.reduce((total,product) => total + product.price * product.quantity,0)
            state.chekout = false
        },
        removeItem : (state,{payload}) => {
            state.selectedItems = state.selectedItems.filter(item => item.id !== payload.id)
            state.itemsCounter  = state.selectedItems.reduce((total,product) => total + product.quantity,0)
            state.total  = state.selectedItems.reduce((total,product) => total + product.price * product.quantity,0)
            

        },
        increase : (state,{payload}) => {
            const index = state.selectedItems.findIndex(item => item.id === payload.id)
            state.selectedItems[index].quantity++

            
            state.itemsCounter  = state.selectedItems.reduce((total,product) => total + product.quantity,0)
            state.total  = state.selectedItems.reduce((total,product) => total + product.price * product.quantity,0)
        },
        decrease : (state,{payload}) => {
            const index = state.selectedItems.findIndex(item => item.id === payload.id)
            state.selectedItems[index].quantity--
            state.itemsCounter  = state.selectedItems.reduce((total,product) => total + product.quantity,0)
            state.total  = state.selectedItems.reduce((total,product) => total + product.price * product.quantity,0)
        },
        checkout: (state) => {
            state.selectedItems = []
            state.total = 0
            state.itemsCounter = 0
            state.chekout = true
            
        },
        clear: (state) => {
            state.selectedItems = []
            state.total = 0
            state.itemsCounter = 0
            state.chekout = false
            
        }

    }
})

export const {
addToCart,removeItem,increase,decrease,clear,checkout
} = movementsSlice.actions

export default movementsSlice.reducer