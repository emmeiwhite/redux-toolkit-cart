import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              // First clearCart, then closeModal
              dispatch(clearCart())
              dispatch(closeModal())
            }}>
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal())
            }}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
