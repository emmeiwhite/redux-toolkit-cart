import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true
    },
    closeModal: state => {
      state.isOpen = false
    }
  }
})

console.log(modalSlice)

// export action creators in no time
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
