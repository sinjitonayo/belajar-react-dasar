export default function Product({ product }) {
  return (
    <div className="">
      <h2>
        {product.name}
        <span className="text-sm text-gray-500"> {product.price}</span>
      </h2>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
}
