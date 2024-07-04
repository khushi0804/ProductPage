import { React, useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css"
//Database
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //------------radio filter-----
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-----------------buttons filter----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, title,img }) =>
         ( category === selected ||
          title === selected || img === selected)
      );
    }

    return filteredProducts.map(({img,title})=>{
      <Card key={Math.random()}
        img={img}
        title={title}
      />
    })
  }
  
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
