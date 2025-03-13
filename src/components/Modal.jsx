import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector(store => store.modal)
  console.log(isOpen)
  return (
    <aside className={`modal-container ${isOpen ? '' : 'modal-close'}`}>
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn">
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
