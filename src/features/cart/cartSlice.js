import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
const initialState = {
  cartItems: cartItems,
  totalItems: 8,
  totalAmount: 0,
  isLoading: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState
})

console.log(cartSlice) // This cartSlice object contains bunch of properties and one property is reducer which we will export

export default cartSlice.reducer
