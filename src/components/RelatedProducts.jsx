import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyProducts } from '../assets/Data';

const RelatedProducts = () => {
  const navigate = useNavigate();
  const {categories} = useParams()
  const categoryName = categories

  console.log("Category received:", categories, "→ Using:", categoryName);

  const related = dummyProducts.filter(
    (product) =>
      String(product.category).trim().toLowerCase() ===
      String(categoryName).trim().toLowerCase()
  );

  return (
    <section className="px-3 py-16 bg-gradient-to-r from-gray-200 to-gray-200">
      <div className="md:max-w-7xl sm:max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          Related <span className="text-gray-500 underline">Products</span>
        </h2>
        <p className="text-black/50 mb-6">
          Explore our collection of products under the category:{" "}
          <span className="text-black font-semibold">{categoryName}</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {related.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No related products found.
            </p>
          ) : (
            related.map((product) => (
              <div
                key={product._id}
                className="min-h-[150px] sm:h-[250px] sm:w-[250px] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white"
              >
                <div
                  onClick={() =>
                    navigate(`/collection/${product.category}/${product._id}`)
                  }
                  className="flex items-center justify-center bg-gray-100 overflow-hidden h-[180px] rounded cursor-pointer"
                >
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="object-contain h-full w-full"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between mt-2">
                  <div>
                    <h4 className="font-bold text-[15px] uppercase line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-black/50 text-sm line-clamp-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2 pl-1 text-sm">
                    <p className="text-gray-600">{product.category}</p>
                    <button className="border border-gray-300 py-1 px-2 sm:px-3 text-[10px] sm:text-xs rounded hover:bg-gray-100 transition whitespace-nowrap cursor-pointer"
                      onClick={() => addToCart(product._id,selectedSize)}>
                      Add to Cart | ₹{product.offerPrice}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
