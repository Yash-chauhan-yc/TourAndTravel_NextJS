import React from "react";
import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";
import img1 from '../assets/package/1.jpg'
import img2 from "../assets/package/2.jpg";
import img3 from "../assets/package/3.jpg";
import img4 from "../assets/package/4.jpg";
import img5 from "../assets/package/5.jpg";
import img6 from "../assets/package/6.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Package.scss";
import ChooseHeading from "./ChooseHeading";
import Product from "./Product";
import { FaStar } from 'react-icons/fa';
import Image from "next/image";



// export default function Package() {

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

// const productData = [
//   {
//     id: 1,
//     imageURL: {img1},
//     country: "Australia",
//     price: "$236",
//     time: "5 Days - 4 Night",
//     description:
//       "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
//   },
// {
//   id: 2,
//   imageURL: img2,
//   country: "Canada",
//   price: "$236",
//   time: "5 Days - 4 Night",
//   description:
//     "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
// },
// {
//   id: 3,
//   imageURL: img3,
//   country: "France",
//   price: "$236",
//   time: "5 Days - 4 Night",
//   description:
//     "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
// },
// {
//   id: 4,
//   imageURL: img4,
//   country: "Germany",
//   price: "$236",
//   time: "5 Days - 4 Night",
//   description:
//     "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
// },
// {
//   id: 5,
//   imageURL: img5,
//   country: "Japan",
//   price: "$236",
//   time: "5 Days - 4 Night",
//   description:
//     "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
// },
// {
//   id: 6,
//   imageURL: img6,
//   country: "Thailand",
//   price: "$236",
//   time: "5 Days - 4 Night",
//   description:
//     "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
// },
// ];

// const product = productData.map((item) => (
//   <Product
//     key={item.id}
//     url={item.imageURL}
//     country={item.country}
//     price={item.price}
//     time={item.time}
//     description={item.description}
//   />
// ));

// return (
//   <div className="text-left" id="package">
//     <h1>React multi carousel</h1>
//     <Carousel responsive={responsive}>{product}</Carousel>
//   </div>
// );
//
//   return (
//     <div className="text-left" id="package">
//       <h1>React Carousel</h1>
//       <Carousel responsive={responsive}>
//       <div className="card single_package">
//       <img src={img1} alt="image1" />
//       <div className="package-hove">
//         <div className="pull-left">Australia</div>
//         <div className="pull-right">
//           <span className="pack_price">236</span>
//         </div>
//         <div className="rating">
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//         </div>
//         <span className="time_zone">
//           <i></i>
//           5 days 0 4 night
//         </span>
//         <p>
//           Loren
//         </p>
//         <a className="btn-bg">Book Now</a>
//       </div>
//     </div>
//       </Carousel>
//     </div>
//   );
// }

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productData = [
  {
    id: 1,
    imageURL: img1,
    country: "Australia",
    price: "$236",
    time: "5 Days - 4 Night",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
  },
  {
    id: 2,
    imageURL: img2,
    country: "Canada",
    price: "$236",
    time: "5 Days - 4 Night",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
  },
  {
    id: 3,
    imageURL: img3,
    country: "France",
    price: "$236",
    time: "5 Days - 4 Night",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
  },
  {
    id: 4,
    imageURL: img4,
    country: "Germany",
    price: "$236",
    time: "5 Days - 4 Night",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
  },
  {
    id: 5,
    imageURL: img5,
    country: "Japan",
    price: "$236",
    time: "5 Days - 4 Night",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
  },
  {
    id: 6,
    imageURL: img6,
    country: "Thailand",
    price: "$236",
    time: "5 Days - 4 Night",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit. In efficitur diam tellus Phasellus",
  },
  // Add more data as needed
];

export default function Package() {
  return (
    <>
      <ChooseHeading 
        first="Popular Tour Package"
        second="The Best of Our All"
        third="Tour Packages"
      />
      <div className="text-left custom" id="package">
        <Carousel responsive={responsive}>
          {productData.map((item) => (
            <Product
              key={item.id}
              imageURL={item.imageURL}
              country={item.country}
              price={item.price}
              time={item.time}
              description={item.description}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
