import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const { cartItems } = useSelector(store => store.cart)
  const dispatch = useDispatch()

  // useEffect will invoke every time cartItems update
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
