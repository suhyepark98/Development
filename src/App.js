import React from 'react';
import FilteredList from './FilteredList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.jpg'
import img14 from './images/img14.jpg'
import img15 from './images/img15.jpg'
import img16 from './images/img16.jpg'
import img17 from './images/img17.jpg'
import img18 from './images/img18.jpg'
import img19 from './images/img19.jpg'
import img20 from './images/img20.jpg'
import img21 from './images/img21.jpg'
import img22 from './images/img22.jpg'
import img23 from './images/img23.jpg'
import img24 from './images/img24.jpg'

// list of items that can be purchased, each specified by id, name, gender, type, price, and image
const productList = [
  { id: 1, name: "ESSENTIALS 3-STRIPES PULLOVER HOODIE", gender: "Men", type: "Sweatshirts", price: 55.00, img: img1 },
  { id: 2, name: "ADICOLOR POLAR FLEECE CREW SWEATSHIRT", gender: "Men", type: "Sweatshirts", price: 70.00, img: img2 },
  { id: 3, name: "TREFOIL HOODIE", gender: "Men", type: "Sweatshirts", price: 65.00, img: img3 },
  { id: 4, name: "3-STRIPES HOODIE", gender: "Women", type: "Sweatshirts", price: 30.00, img: img4 },
  { id: 5, name: "TREFOIL CREW SWEATSHIRT", gender: "Women", type: "Sweatshirts", price: 60.00, img: img5 },
  { id: 6, name: "OUTLINE TREFOIL CREW SWEATSHIRT", gender: "Women", type: "Sweatshirts", price: 60.00, img: img6 },
  { id: 7, name: "CROPPED HOODIE", gender: "Women", type: "Sweatshirts", price: 60.00, img: img7 },
  { id: 8, name: "CORE COLORBLOCK HOODIE", gender: "Kids", type: "Sweatshirts", price: 45.00, img: img8 },
  { id: 9, name: "BACK TO SPORT INSULATED HOODED JACKET", gender: "Men", type: "Jackets", price: 100.00, img: img9 },
  { id: 10, name: "BSC 3-STRIPES RAIN.RDY JACKET", gender: "Men", type: "Jackets", price: 90.00, img: img10 },
  { id: 11, name: "MYSHELTER PARLEY RAIN.RDY JACKET", gender: "Men", type: "Jackets", price: 250.00, img: img11 },
  { id: 12, name: "HELIONIC RELAXED FIT DOWN JACKET", gender: "Women", type: "Jackets", price: 140.00, img: img12 },
  { id: 13, name: "ADIDAS NEW AUTHENTIC TRACK JACKET", gender: "Women", type: "Jackets", price: 65.00, img: img13 },
  { id: 14, name: "INSULATED JACKET", gender: "Kids", type: "Jackets", price: 80.00, img: img14 },
  { id: 15, name: "TREFOIL TEE", gender: "Men", type: "T-shirts", price: 30.00, img: img15 },
  { id: 16, name: "DESIGNED 2 MOVE LOGO TEE", gender: "Men", type: "T-shirts", price: 25.00, img: img16 },
  { id: 17, name: "RUN IT 3-STRIPES FAST TEE", gender: "Women", type: "T-shirts", price: 26.00, img: img17 },
  { id: 18, name: "OWN THE RUN TEE", gender: "Women", type: "T-shirts", price: 35.00, img: img18 },
  { id: 19, name: "TREFOIL TEE KIDS", gender: "Kids", type: "T-shirts", price: 20.00, img: img19 },
  { id: 20, name: "TIRO 19 TRAINING PANTS", gender: "Men", type: "Pants", price: 45.00, img: img20 },
  { id: 21, name: "ESSENTIALS 3-STRIPES TAPERED PANTS", gender: "Men", type: "Pants", price: 45.00, img: img21 },
  { id: 22, name: "PRIMEBLUE SST TRACK PANTS", gender: "Women", type: "Pants", price: 65.00, img: img22 },
  { id: 23, name: "R.Y.V. CARGO PANTS", gender: "Women", type: "Pants", price: 80.00, img: img23 },
  { id: 24, name: "3-STRIPES PANTS", gender: "Kids", type: "Pants", price: 40.00, img: img24 }
]

/* Adidas online shopping app */
function App() {
  return (
    <div className="app">
      <div className="title">
        <h1><b>Adidas Online Shop</b></h1>
      </div>

      <FilteredList list={productList} />
    </div>
  );
}

export default App;