import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { categories } from '../assets/Data';

const Categories = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <section className="py-12  bg-gradient-to-r  from-gray-200 to-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">
          Category <span className="text-gray-500 underline">List</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories && categories.length > 0 ? (
            categories.map((item) => (
              <div
                key={item.name}
                onClick={() => navigate(`/collection/${item.name}`)}
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="w-45 h-45 bg-gray-50 flex items-center justify-center overflow-hidden rounded-md shadow hover:shadow-lg transition">
                  <img
                    src={item.image}
                    className="object-contain h-full"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-semibold uppercase">
                  {item.name}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No categories found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
