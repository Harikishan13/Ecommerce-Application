import men from "../assets/product_1.png";
import women from "../assets/product_9.png";
import kids from "../assets/product_15.png";
import Footwear from "../assets/product_23.png";
import Winterwear from "../assets/product_27.png";
import Sportswear from "../assets/product_36.png";
import product_1 from "./product_1.png";
import product_2 from "./product_2.png";
import product_3 from "./product_3.png";
import product_4 from "./product_4.png";
import product_5 from "./product_5.png";
import product_6 from "./product_6.png";
import product_7 from "./product_7.png";
import product_8 from "./product_8.png";
import product_9 from "./product_9.png";
import product_10 from "./product_10.png";
import product_11 from "./product_11.png";
import product_12 from "./product_12.png";
import product_13 from "./product_13.png";
import product_14 from "./product_14.png";
import product_15 from "./product_15.png";
import product_16 from "./product_16.png";
import product_17 from "./product_17.png";
import product_18 from "./product_18.png";
import product_19 from "./product_19.png";
import product_20 from "./product_20.png";
import product_21 from "./product_21.png";
import product_22 from "./product_22.png";
import product_23 from "./product_23.png";
import product_24 from "./product_24.png";
import product_25 from "./product_25.png";
import product_26 from "./product_26.png";
import product_27 from "./product_27.png";
import product_28 from "./product_28.png";
import product_29 from "./product_29.png";
import product_30 from "./product_30.png";
import product_31 from "./product_31.png";
import product_32 from "./product_32.png";
import product_33 from "./product_33.png";
import product_34 from "./product_34.png";
import product_35 from "./product_35.png";
import product_36 from "./product_36.png";
import product_37 from "./product_37.png";
import product_38 from "./product_38.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

export const blogs = [
  {
    title: "Top Shopping Tips for Smart Buyers",
    category: "Women",
    image: blog1,
  },
  {
    title: "Latest Trends in Online Shopping 2024",
    category: "Footwear",
    image: blog2,
  },
  { 
    title: "How to Spot the Best Deals Online", 
    category: "Men", 
    image: blog3 
  },
  {
    title: "Why E-Commerce is the Future of Shopping",
    category: "Winterwear",
    image: blog4,
  },
];

export const categories = [
  {
    name: "Men",
    image: men,
  },
  {
    name: "Women",
    image: women,
  },
  {
    name: "Kids",
    image: kids,
  },
  {
    name: "Footwear",
    image: Footwear,
  },
  {
    name: "Winterwear",
    image: Winterwear,
  },
  {
    name: "Sportswear",
    image: Sportswear,
  },
];

export const dummyProducts = [
  // Men's Products
  {
    _id: "1",
    name: "Classic Striped Cotton T-Shirt",
    image: [product_1, product_3, product_5, product_7],
    price: 499,
    offerPrice: 399,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Elevate your casual look with this soft striped cotton tee, designed for all-day comfort and effortless style.",
    category: "Men",
    popular: true,
    inStock: true,
  },
  {
    _id: "2",
    name: "Trendy Floral Printed T-Shirt",
    image: [product_2],
    price: 1899,
    offerPrice: 1299,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay fresh this summer with our floral printed T-shirt, crafted from breathable fabric and a slim fit cut.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "3",
    name: "Minimalist Grey Crew Neck T-Shirt",
    image: [product_3],
    price: 3499,
    offerPrice: 2599,
    sizes: ["M", "L", "XL"],
    description:
      "A clean, versatile crew-neck tee for your everyday wardrobe — easy to pair with jeans or joggers.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "4",
    name: "Graphic Print White T-Shirt",
    image: [product_4],
    price: 3799,
    offerPrice: 2799,
    sizes: ["M", "L", "XL"],
    description:
      "Make a statement with this bold graphic tee, featuring premium cotton and a relaxed modern fit.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "5",
    name: "Sporty Navy Blue T-Shirt",
    image: [product_5],
    price: 2199,
    offerPrice: 1599,
    sizes: ["S", "M", "L", "XL"],
    description:
      "A soft performance tee perfect for workouts or casual days, offering breathability and comfort.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "6",
    name: "Basic Black Cotton T-Shirt",
    image: [product_6],
    price: 2799,
    offerPrice: 1999,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Your everyday essential — a solid black cotton T-shirt built for comfort and simplicity.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "7",
    name: "Plain White Crew T-Shirt",
    image: [product_7],
    price: 3299,
    offerPrice: 2399,
    sizes: ["S", "M", "L", "XL"],
    description:
      "A timeless white crew-neck T-shirt — lightweight, soft, and perfect for layering.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "8",
    name: "Army Green Oversized T-Shirt",
    image: [product_8],
    price: 3999,
    offerPrice: 2899,
    sizes: ["M", "L", "XL"],
    description:
      "Casual meets cool — this oversized army-green tee gives a relaxed streetwear vibe for everyday wear.",
    category: "Men",
    popular: false,
    inStock: true,
  },

  // Women's Products
  {
    _id: "9",
    name: "Elegant Wide Leg Jumpsuit with Modern Sleeveless Style",
    image: [product_9],
    price: 2999,
    offerPrice: 2199,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Make a bold statement with this chic jumpsuit, crafted for the confident woman who values modern fashion.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "10",
    name: "Luxury Silk Floral Print Scarf for Elegant Occasions",
    image: [product_10],
    price: 1799,
    offerPrice: 999,
    sizes: [],
    description:
      "Enhance your outfit with this silk scarf, designed to bring a touch of refined elegance to any look.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "11",
    name: "Pointed Toe Kitten Heel Pumps for Office and Evening",
    image: [product_11],
    price: 2999,
    offerPrice: 1999,
    sizes: [5, 6, 7, 8, 9],
    description:
      "Step confidently with these stylish pumps, offering the perfect balance of comfort and sophistication.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "12",
    name: "Wool Blend Two Button Blazer Suit for Formal Events",
    image: [product_12],
    price: 3499,
    offerPrice: 2599,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Elevate your wardrobe with this wool blend suit, designed for women who appreciate bold and timeless elegance.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "13",
    name: "Slim Fit Bomber Jacket with Zippered Front in Olive Green",
    image: [product_13],
    price: 2699,
    offerPrice: 1899,
    sizes: ["S", "M", "L"],
    description:
      "Experience ultimate comfort and style with this bomber jacket, made for women who love a sleek modern look.",
    category: "Women",
    popular: true,
    inStock: true,
  },
  {
    _id: "14",
    name: "Relaxed Fit Denim Shirt with Button Front and Chest Pockets",
    image: [product_14],
    price: 2299,
    offerPrice: 1599,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay casually chic with this denim shirt, tailored for women who enjoy easy-going yet fashionable outfits.",
    category: "Women",
    popular: false,
    inStock: true,
  },

  // Kids Products
  {
    _id: "15",
    name: "Colorful Polo Shirt with Fun Contrast Collar & Cuffs",
    image: [product_15],
    price: 999,
    offerPrice: 699,
    sizes: ["XS", "S", "M", "L"],
    description:
      "Give your kids a playful yet classic look with this polo shirt, combining comfort with vibrant style.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  {
    _id: "16",
    name: "Warm Hooded Jacket with Front Pockets & Adjustable Drawstring",
    image: [product_16],
    price: 1299,
    offerPrice: 899,
    sizes: ["S", "M", "L"],
    description:
      "Keep your little ones cozy in this hooded jacket, designed for everyday comfort with playful charm.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  {
    _id: "17",
    name: "Smart Formal Shirt with Spread Collar & Soft Fabric",
    image: [product_17],
    price: 1099,
    offerPrice: 799,
    sizes: ["S", "M", "L"],
    description:
      "Dress up your young ones with this formal shirt, ideal for special occasions and stylish outings.",
    category: "Kids",
    popular: true,
    inStock: true,
  },
  {
    _id: "18",
    name: "Stretch Slim Fit Chino Pants for Everyday Wear",
    image: [product_18],
    price: 1199,
    offerPrice: 899,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Perfect for active kids, these slim fit chinos provide comfort and flexibility for daily adventures.",
    category: "Kids",
    popular: false,
    inStock: true,
  },

  // Footwear Products
  {
    _id: "21",
    name: "Lightweight Breathable Mesh Running Sneakers",
    image: [product_21],
    price: 2899,
    offerPrice: 1999,
    sizes: [6, 7, 8, 9, 10, 11],
    description:
      "Enjoy all-day comfort with these breathable running sneakers, designed for excellent support and ventilation.",
    category: "Footwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "22",
    name: "Classic Leather Slip-On Loafers",
    image: [product_22],
    price: 3199,
    offerPrice: 2199,
    sizes: [6, 7, 8, 9, 10],
    description:
      "Step into timeless style with these leather loafers, offering easy slip-on wear and sophisticated comfort.",
    category: "Footwear",
    popular: true,
    inStock: true,
  },
  {
    _id: "23",
    name: "Durable Trail Hiking Shoes with Cushioned Soles",
    image: [product_23],
    price: 3399,
    offerPrice: 2399,
    sizes: [6, 7, 8, 9, 10, 11],
    description:
      "Take on any terrain with these rugged hiking shoes, featuring strong grip soles and cushioned interiors.",
    category: "Footwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "24",
    name: "High-Top Fashion Sneakers with Padded Ankle",
    image: [product_24],
    price: 2799,
    offerPrice: 1999,
    sizes: [6, 7, 8, 9, 10],
    description:
      "Elevate your casual look with these stylish high-top sneakers, providing both ankle support and modern design.",
    category: "Footwear",
    popular: false,
    inStock: true,
  },

  // Winterwear Products
  {
    _id: "27",
    name: "Toddler Ruffle Sleeve Dress with Bow Accent",
    image: [product_27],
    price: 1399,
    offerPrice: 999,
    sizes: ["XS", "S", "M", "L"],
    description:
      "Your toddler will shine in this charming dress, crafted for comfort and joy on every special occasion.",
    category: "Winterwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "32",
    name: "Soft Plush Baby Blanket with Animal Embroidery",
    image: [product_32],
    price: 999,
    offerPrice: 599,
    sizes: [],
    description:
      "Wrap your baby in cozy warmth with this adorable blanket, featuring cute embroidered animal designs.",
    category: "Winterwear",
    popular: true,
    inStock: true,
  },

  // Sportswear Products
  {
    _id: "33",
    name: "Breathable Quick-Dry Running Shorts",
    image: [product_33],
    price: 1499,
    offerPrice: 999,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay cool and dry during workouts with these lightweight running shorts, featuring moisture-wicking fabric.",
    category: "Sportswear",
    popular: false,
    inStock: true,
  },
  {
    _id: "34",
    name: "Stretchy Athletic Leggings with High Waist",
    image: [product_34],
    price: 1999,
    offerPrice: 1299,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Perfect your workout sessions with these high-waisted leggings, offering flexibility, comfort, and breathability.",
    category: "Sportswear",
    popular: true,
    inStock: true,
  },
  {
    _id: "36",
    name: "Comfort Fit Gym Shorts with Elastic Waistband",
    image: [product_36],
    price: 1599,
    offerPrice: 999,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Move freely during training with these comfort fit gym shorts, featuring an adjustable waistband and breathable design.",
    category: "Sportswear",
    popular: false,
    inStock: true,
  },
];


