// import "../App.css"; //styling

import { ProductStyle } from "../styles";

const ProductItem = (props) => {
  return (
    <div>
      <ProductStyle src={props.product.imageURL} alt="coffe" />
      <p>{props.product.name}</p>
      <p>{props.product.price} JD</p>
    </div>
  );
};

export default ProductItem;
