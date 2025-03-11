import { useSelector } from 'react-redux'
import { CartIcon } from '../icons'

export default function Navbar() {
  const { totalItems } = useSelector(store => store.cart)

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{totalItems}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
