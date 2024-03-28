// import React, { useState } from 'react'
// import "./Product.scss"
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Balance, FavoriteBorder } from '@mui/icons-material';

// const Product = () => {
// const images = [
//   "/img/products/1.1.jpg",
//   "/img/products/1.2.jpg"
// ]

//   const [selectedImage, setSelectedImage] = useState(0)
//   const [quantity, setQuantity] = useState(0)

//   return (
//     <div className="product">
//       <div className="left">
//         <div className="images">
//           <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
//           <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
//         </div>
//         <div className="mainImg">
//           <img src={images[selectedImage]} alt="" />
//         </div>
//       </div>
//       <div className="right">
//         <h1 className='title'>Title</h1>
//         <span className='price'>$199</span>
//         <p>Lorem ipsum dolor sit,
//           amet consectetur adipisicing
//           elit. Dolorum accusamus
//           laborum porro sunt, impedit
//           illo eaque maxime sit quaerat
//           cumque commodi deleniti earum
//           consequatur ipsam obcaecati hic
//           saepe quo. Explicabo.
//         </p>
//         <div className="quantity">
//           <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
//           {quantity}
//           <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
//         </div>
//         <button className="add">
//           <AddShoppingCartIcon /> ADD TO CART
//         </button>
//         <div className="links">
//           <div className="item">
//             <FavoriteBorder /> ADD TO WISH LIST
//           </div>
//           <div className="item">
//             <Balance /> ADD TO COMPARE
//           </div>
//         </div>
//         <div className="info">
//           <span>Vendor: Polo</span>
//           <span>Product Type: T-Shirt</span>
//           <span>Tag: T-Shirt, Women, Top</span>
//         </div>
//         <hr />
//         <div className="info">
//           <span>DESCRIPTION</span>
//           <hr />
//           <span>ADDITIONAL INFORMATION</span>
//           <hr />
//           <span>FAQ</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Product


import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0)

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)


  // const images = [
  //   "/img/products/1.1.jpg",
  //   "/img/products/1.2.jpg"
  // ]

  return (
    <div className="product">
      {loading ? "loading" : (<>
        <div className="left">
          <div className="images">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              onClick={(e) => setSelectedImg("img")}
            />
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              onClick={(e) => setSelectedImg("img2")}
            />
          </div>
          <div className="mainImg">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url
              }
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className="price">{`$${data?.attributes?.price}`}</span>
          <p>{data?.attributes?.desc}</p>
          <div className="quantity">
            <button
              onClick={() =>
                setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
              }
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"

          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION </span>
            <hr />

            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </>)}



    </div>
  );
};

export default Product;