import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-700 pt-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-10 pb-10">
        <div>
          <h2 className="text-tertiary font-pop text-3xl font-bold uppercase">ShopEasy</h2>
          <p className="text-sm text-gray-600 mt-4 ">
            Discover stylish clothing and shoes online, crafted for<br/> comfort and quality. 
            Shop fashion-forward designs that <br/>elevate your look and fit every lifestyle.
          </p>
        </div>
        <div >
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600 cursor-pointer">
            <li><span>Home</span></li>
            <li><span>Best Sellers</span></li>
            <li><span>Offers & Deals</span></li>
            <li><span>Contact Us</span></li>
            <li><span>FAQs</span></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
          <ul className="space-y-2 text-sm text-gray-600 cursor-pointer">
            <li><span>Delivery Information</span></li>
            <li><span>Return & Refund Policy</span></li>
            <li><span>Payment Methods</span></li>
            <li><span>Track your Order</span></li>
            <li><span>Contact Us</span></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-600 cursor-pointer">
            <li><span>Instagram</span></li>
            <li><span>Twitter</span></li>
            <li><span>Facebook</span></li>
            <li><span>YouTube</span></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />

      <div className="text-center text-sm text-gray-500 py-4">
        Copyright © 2025 © CodeAtUsman All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
