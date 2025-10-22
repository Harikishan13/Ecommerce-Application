import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyProducts } from "../assets/Data";
import { FaTruckFast } from "react-icons/fa6";
import { TbShoppingBagPlus, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";

const Productdetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext);

  const product = dummyProducts.find((p) => p._id === id);

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-500">Product not found.</p>
    );

  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setMainImage(product.image[0])
    }
  },[product])

  useEffect(() => {
    document.title = `${product.name} | MyStore`;
  }, [product.name]);

  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-200 py-30">
      <div className="md:max-w-7xl mx-auto bg-white p-8 rounded shadow">
        <div className="text-sm text-gray-500 mb-6">
          Home / Collection / {product.category} /{" "}
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col gap-4">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`w-20 h-20 object-cover border cursor-pointer ${
                    mainImage === img ? "ring-2" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <img
              src={mainImage}
              alt={product.name}
              className="w-full max-w-sm rounded object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-x-2">
              <div className="flex gap-x-2 text-yellow-400">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarHalfFilled />
              </div>
              <p className="font-medium">(22)</p>
            </div>

            <div className="flex items-center gap-3 text-2xl font-medium mb-4">
              <span className="line-through text-gray-400 text-lg">
                ₹{product.price || product.prices}
              </span>
              <span className="text-red-600 font-bold">
                ₹{product.offerPrice}
              </span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <h3 className="text-lg font-medium mb-2">Select Size:</h3>
            <div className="flex gap-3 mb-6">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border cursor-pointer ${
                    selectedSize === size
                      ? "bg-black/50 text-black border-black"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={() => addToCart(product._id, selectedSize)}
              className="bg-black text-white flex items-center justify-center gap-2 w-full md:w-auto px-10 py-3 text-lg font-medium rounded hover:bg-gray-800 transition cursor-pointer"
            >
              Add to Cart
              <TbShoppingBagPlus size={22} />
            </button>

            <div className="flex items-center gap-2 mt-6">
              <FaTruckFast className="text-green-600 text-xl" />
              <p className="text-green-600 text-sm font-medium">
                Free Delivery on orders over ₹500
              </p>
            </div>

            <ul className="mt-4 py-4 text-black/30 text-sm space-y-1 border-t">
              <li>Authenticity You Can Trust</li>
              <li>Enjoy Cash on Delivery for Your Convenience</li>
              <li>Easy Returns and Exchanges Within 7 Days</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-10 pt-6 px-6 md:px-12">
        <div className="flex gap-8 text-gray-600 text-sm font-medium border-b pb-2 mb-4">
          <button className="hover:text-black">Description</button>
          <button className="hover:text-black">Care Guide</button>
          <button className="hover:text-black">Color Guide</button>
        </div>
        <p className="text-gray-700 text-sm">
          Detail section here (replace with real content if needed)...
        </p>
      </div>

      {/* Related Products */}
      <div>
        <RelatedProducts addToCart={addToCart} selectedSize={selectedSize} />
      </div>
    </section>
  );
};

export default Productdetails;
