import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImgShopping from "../assets/heroShopping.jpg";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-200 to-gray-300 py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        
        {/* Text Side */}
        <motion.div
          className="flex-1 text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-black font-extrabold text-4xl lg:text-6xl leading-tight mb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shine with Every Bag
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From daily essentials to trending steals — find your style, find your vibe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/collection"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-900 hover:scale-105 transition-all duration-300"
            >
              Explore Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="flex-1 relative w-full max-w-[400px] group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src={heroImgShopping}
            alt="Happy shopper with bags"
            className="relative w-full rounded-2xl shadow-xl object-cover transform transition-transform duration-700 "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
