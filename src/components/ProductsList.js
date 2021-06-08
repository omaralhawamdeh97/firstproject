// import "../App.css"; //styling
import { useState } from "react";
import products from "../products"; //component
import { MenuItems } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

const ProductList = (props) => {
  const [Query, setQuery] = useState("");

  let filteredList = products
    .filter((product) => product.name.includes(Query))
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        setCurrentProduct={props.setCurrentProduct}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <MenuItems>{filteredList}</MenuItems>
    </>
  );
};

export default ProductList;
