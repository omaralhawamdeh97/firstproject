// import "../App.css"; //styling
import { useState } from "react";
import { MenuItems } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

const ProductList = (props) => {
  const [Query, setQuery] = useState("");

  let List = props.products
    .filter((product) => product.name.includes(Query))
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        setCurrentProduct={props.setCurrentProduct}
        deleteProduct={props.deleteProduct}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <MenuItems>{List}</MenuItems>
    </>
  );
};

export default ProductList;
