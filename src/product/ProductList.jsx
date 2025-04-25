import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    console.log("ProductList component mounted");
    if (loaded.current === false) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }

    return () => {
      // Cleanup function if needed
      console.log("ProductList component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id} className="border p-4 mb-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
