import "./App.css";

function App() {
  const products = [
    { id: 1, name: "iPhone 15", category: "Mobile", price: "₹70,000", image: "📱" },
    { id: 2, name: "Samsung Galaxy", category: "Mobile", price: "₹45,000", image: "📱" },
    { id: 3, name: "OnePlus 12", category: "Mobile", price: "₹55,000", image: "📱" },
    { id: 4, name: "Google Pixel", category: "Mobile", price: "₹60,000", image: "📱" },
    { id: 5, name: "Redmi Note", category: "Mobile", price: "₹20,000", image: "📱" },
    { id: 6, name: "Nike Shoes", category: "Shoes", price: "₹5,000", image: "👟" },
    { id: 7, name: "Adidas Shoes", category: "Shoes", price: "₹6,000", image: "👟" },
    { id: 8, name: "Puma Shoes", category: "Shoes", price: "₹4,000", image: "👟" },
    { id: 9, name: "Reebok Shoes", category: "Shoes", price: "₹3,500", image: "👟" },
    { id: 10, name: "Campus Shoes", category: "Shoes", price: "₹2,000", image: "👟" }
  ];

  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="product-image">{product.image}</div>

            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <h3>{product.price}</h3>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;