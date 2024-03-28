import React from 'react'
import "./List.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'


const List = ({ subCats, maxPrice, sort, catId }) => {
    console.log(sort)
    const { data, loading, error } = useFetch(`/products?populate=*&[filters] [categories] [id]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters] [price] [$lte]=${maxPrice}&sort=price:${sort}`)

    console.log(data)
    // const data = [
    //     {
    //         id: 1,
    //         img: '/img/products/1.1.jpg',
    //         img2: '/img/products/1.2.jpg',
    //         title: 'Sweater x White Tee Outfit',
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,

    //     },
    //     {
    //         id: 2,
    //         img: '/img/products/2.1.jpg',
    //         img2: '/img/products/2.2.jpg',
    //         title: 'Casual Outside Outfit',
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,

    //     },
    //     {
    //         id: 3,
    //         img: '/img/products/3.1.jpg',
    //         img2: '/img/products/3.2.jpg',
    //         title: 'Casual Outside Outfit',
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,

    //     },
    //     {
    //         id: 4,
    //         img: '/img/products/4.1.jpg',
    //         img2: '/img/products/4.2.jpg',
    //         title: 'Casual Outside Outfit',
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,

    //     },
    // ]


    return (
        <div className="list">
            {loading
                ? "loading"
                : data?.map(item => (<Card item={item} key={item.id} />))}
        </div>
    )
}

export default List