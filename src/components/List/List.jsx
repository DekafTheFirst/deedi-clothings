import React from 'react'
import "./List.scss"
import Card from '../Card/Card'


const List = () => {
    
    
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
        <div className="list">
            {data?.map(item=>(<Card item={item} key={item.id}/>))}
        </div>
    )
}

export default List