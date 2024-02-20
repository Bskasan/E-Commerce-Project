import { useEffect, useState } from "react";
import { Product } from "./misc/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [products]);

  function addProduct() {
    //! Taking all members of products and adding a new member to the end of the array
    setProducts([...products, { name: "Product3", price: 300 }]);
  }

  return (
    <div>
      <h1>B-Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
