import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
  isLoading: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState
})

console.log(cartSlice) // This cartSlice object contains bunch of properties and one property is reducer which we will export

export default cartSlice.reducer
