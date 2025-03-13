import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://www.course-api.com/react-useReducer-cart-project'
const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
  isLoading: false
}

// To perform async-operations
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then(response => response.json()) // When the request gets fulfilled [getCartItems.fulfilled] in extraReducers
    .catch(error => console.log(error))
})

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

      /** Before remove all the cart items, we must first open the modal, we must have a way out to use openModal action creator here in the cartSlice */

      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      //   console.log(payload) // payload is object in this case
      const cartItem = state.cartItems.find(item => item.id === payload.id)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1
      state.totalItems = state.totalItems - 1
    },
    calculateTotals: state => {
      let itemsCount = 0
      let amountTotal = 0
      state.cartItems.forEach(item => {
        itemsCount += item.amount
        amountTotal += item.price * item.amount
      })
      // Immer in action
      state.totalItems = itemsCount
      state.totalAmount = amountTotal.toFixed(2)
    }
  },
  extraReducers: {
    [getCartItems.pending]: state => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action)
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: state => {
      state.isLoading = false
    }
  }
})

console.log(cartSlice) // This cartSlice object contains bunch of properties and one property is reducer which we will export
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer
