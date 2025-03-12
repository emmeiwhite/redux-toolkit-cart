import { useSelector } from 'react-redux'

const CartContainer = () => {
  const { totalItems, totalAmount, cartItems } = useSelector(store => store.cart)

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
  console.log(cartItems)
  return <div>CartContainer</div>
}
export default CartContainer
