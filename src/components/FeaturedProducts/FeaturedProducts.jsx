import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: '/img/products/1.1.jpg',
      img2: '/img/products/1.2.jpg',
      title: 'Sweater x White Tee Outfit',
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 2,
      img: '/img/products/2.1.jpg',
      img2: '/img/products/2.2.jpg',
      title: 'Casual Outside Outfit',
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 3,
      img: '/img/products/3.1.jpg',
      img2: '/img/products/3.2.jpg',
      title: 'Casual Outside Outfit',
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 4,
      img: '/img/products/4.1.jpg',
      img2: '/img/products/4.2.jpg',
      title: 'Casual Outside Outfit',
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
  ]
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur neque
          totam sed tenetur expedita ab dolorem!
          Eos distinctio numquam laborum quae
          reprehenderit animi non iure assumenda vel a.
          Alias, error!
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>( <Card key={item.id} item={item}/>))}
      </div>
    </div>
  )
}

export default FeaturedProducts