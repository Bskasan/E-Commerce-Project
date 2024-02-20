import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Product1", price: 100 },
    { name: "Product2", price: 200 },
  ]);

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
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
