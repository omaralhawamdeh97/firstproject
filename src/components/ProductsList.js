// import "../App.css"; //styling
import { useState } from "react";
import products from "../products"; //component
import { MenuItems } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

const ProductList = () => {
  const [Query, setQuery] = useState("");
  // const newArray = products.map((product) => (
  //   <ProductItem product={product} key={product.id} />
  // ));
  const filteredList = products
    .filter((product) => product.name.includes(Query))
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <>
      {/* <MenuItems> {newArray}</MenuItems> */}
      <SearchBar setQuery={setQuery} />
      <MenuItems>{filteredList}</MenuItems>
    </>
  );
};

export default ProductList;
