import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
const initialState = {
  cartItems: cartItems,
  totalItems: 4,
  totalAmount: 0,
  isLoading: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      //   console.log(payload)
      const itemId = action.payload
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      //   console.log(payload) // payload is object in this case
      const cartItem = state.cartItems.find(item => item.id === payload.id)
      cartItem.amount = cartItem.amount + 1
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id)
      cartItem.amount = cartItem.amount + 1
      state.totalItems = state.totalItems + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1
      state.totalItems = state.totalItems - 1
    }
  }
})

console.log(cartSlice) // This cartSlice object contains bunch of properties and one property is reducer which we will export
export const { clearCart, removeItem, increase } = cartSlice.actions

export default cartSlice.reducer
