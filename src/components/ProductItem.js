import "../App.css"; //styling

const ProductItem = (props) => {
  return (
    <div>
      <img src={props.product.imageURL} alt="coffe" />
      <p>{props.product.name}</p>
      <p>{props.product.price} JD</p>
    </div>
  );
};

export default ProductItem;
