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
    }
  }
})

console.log(cartSlice) // This cartSlice object contains bunch of properties and one property is reducer which we will export
export const { clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
