import Button from '../element/button/button';

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 flex flex-col justify-between my-2">
      {/* belajar nested component */}
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="products" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};
const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-light text-white">{name.substring(0, 20)} ...</h5>
        <p className="text-m text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};
const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      {/* nambah currency, nominal detail */}
      <span className="text-xl font-bold text-white">${price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};
// msh nested component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;