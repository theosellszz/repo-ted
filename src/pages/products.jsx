// src/pages/ProductPage.jsx
export default function ProductPage() {
  const products = [
    { name: 'AirPods Gen 2', price: 50 },
    { name: 'AirPods Pro', price: 65 },
    { name: 'Sp5der Hoodie', price: 120 },
    { name: 'Denim Tears Hoodie', price: 140 },
  ];

  return (
    <div className="container">
      <h1 className="text-2xl mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-[#222] p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg">${product.price}</p>
            <button className="mt-2">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
