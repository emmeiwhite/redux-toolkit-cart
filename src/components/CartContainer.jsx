import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
  const { totalItems, totalAmount, cartItems } = useSelector(store => store.cart)

  const dispatch = useDispatch()

  if (totalItems < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      {' '}
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map(item => {
          return (
            <CartItem
              key={item.id}
              {...item}
            />
          )
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalAmount}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}
export default CartContainer
