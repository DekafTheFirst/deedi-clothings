import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = () => {
  const images = [
    "/img/products/1.1.jpg",
    "/img/products/1.2.jpg"
  ]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit,
          amet consectetur adipisicing
          elit. Dolorum accusamus
          laborum porro sunt, impedit
          illo eaque maxime sit quaerat
          cumque commodi deleniti earum
          consequatur ipsam obcaecati hic
          saepe quo. Explicabo.
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button  onClick={()=>setQuantity(prev => prev + 1)}>+</button>
            <AddShoppingCartIcon />
          </div>
      </div>
    </div>
  )
}

export default Product