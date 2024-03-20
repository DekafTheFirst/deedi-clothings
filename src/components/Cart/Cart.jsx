import React from 'react'
import "./Cart.scss"
import { DeleteOutlineOutlined } from '@mui/icons-material'

const Cart = () => {
  const data = [
    {
        id: 1,
        img: '/img/products/1.1.jpg',
        img2: '/img/products/1.2.jpg',
        title: 'Sweater x White Tee Outfit',
        isNew: true,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi dolorum iste error perferendis veniam architecto reprehenderit accusamus quia, incidunt voluptas ab molestiae ipsum rem enim consequuntur explicabo? Consequuntur, quisquam.",
        oldPrice: 19,
        price: 12,

    },
    {
        id: 2,
        img: '/img/products/2.1.jpg',
        img2: '/img/products/2.2.jpg',
        title: 'Casual Outside Outfit',
        isNew: true,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi dolorum iste error perferendis veniam architecto reprehenderit accusamus quia, incidunt voluptas ab molestiae ipsum rem enim consequuntur explicabo? Consequuntur, quisquam.",

        oldPrice: 19,
        price: 12,

    },
    {
        id: 3,
        img: '/img/products/3.1.jpg',
        img2: '/img/products/3.2.jpg',
        title: 'Casual Outside Outfit',
        isNew: true,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi dolorum iste error perferendis veniam architecto reprehenderit accusamus quia, incidunt voluptas ab molestiae ipsum rem enim consequuntur explicabo? Consequuntur, quisquam.",

        oldPrice: 19,
        price: 12,

    },
  ]


  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map(item=>(
        <div className="item" id={item.id}>
          <img src={item.img} alt="item" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0,100)}</p>
            <div className="price">1 * ${item.price}</div>
          </div>
          <DeleteOutlineOutlined className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}
 
export default Cart