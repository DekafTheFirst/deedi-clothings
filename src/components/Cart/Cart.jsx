import React from 'react'
import "./Cart.scss"
import { DeleteOutlineOutlined } from '@mui/icons-material'
import {useDispatch, useSelector} from  'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'

const Cart = () => {
  const products = useSelector(state=>state.cart.products)
  
  const totalPrice = () => {
    let total = 0
    products.forEach(item=> (total += item.quantity*item.price));
    return total.toFixed(2)
  }

  const dispatch = useDispatch()


  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map(item=>(
        <div className="item" id={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="item" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0,100)}</p>
            <div className="price">{item.quantity} * ${item.price}</div>
          </div>
          <DeleteOutlineOutlined className='delete' onClick={()=> dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}
 
export default Cart