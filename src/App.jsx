import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector(store => store.cart)
  const { isOpen } = useSelector(store => store.modal)
  const dispatch = useDispatch()

  // useEffect will invoke every time cartItems update
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  // invoke it on the initial render when the application loads. Fetching data asynchronously with createAsyncThunk
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading ...</h2>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
