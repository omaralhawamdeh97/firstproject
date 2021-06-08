// import "../App.css"; //styling

import { ImgStyle } from "../styles";

const ProductItem = (props) => {
  return (
    <div>
      <ImgStyle
        onClick={() => props.setCurrentProduct(props.product)}
        src={props.product.imageURL}
        alt="coffe"
      />
      <p>{props.product.name}</p>
      <p>{props.product.price} JD</p>
    </div>
  );
};

export default ProductItem;
