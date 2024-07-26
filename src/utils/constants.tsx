import { FaSearch } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";
import { HiMiniShoppingCart } from "react-icons/hi2";
import {
  GiSonicShoes,
  GiHoodie,
  GiShorts,
  GiAfrica,
  GiKitchenKnives,
  GiWeightLiftingUp,
} from "react-icons/gi";
import {
  IoShirtSharp,
  IoBookSharp,
  IoFastFoodSharp,
  IoWaterSharp,
  IoFitnessSharp,
  IoBasketballOutline,
} from "react-icons/io5";
import {
  FaLaptop,
  FaMobileAlt,
  FaCamera,
  FaBlender,
  FaShower,
  FaCut,
  FaBiking,
  FaSwimmer,
} from "react-icons/fa";

const preGeneratedUUIDs = [
  "550e8400-e29b-41d4-a716-446655440000",
  "550e8400-e29b-41d4-a716-446655440001",
  "550e8400-e29b-41d4-a716-446655440002",
  "550e8400-e29b-41d4-a716-446655440003",
  "550e8400-e29b-41d4-a716-446655440004",
  "550e8400-e29b-41d4-a716-446655440005",
  "550e8400-e29b-41d4-a716-446655440006",
  "550e8400-e29b-41d4-a716-446655440007",
  "550e8400-e29b-41d4-a716-446655440008",
];

export const bottomNavItems = [
  {
    id: crypto.randomUUID(),
    icon: <RiShoppingBag2Fill size={26} fill="white" />,
    href: "/shop",
    title: "Shop",
    active: true,
  },
  {
    id: crypto.randomUUID(),
    icon: <TbCategoryFilled size={26} />,
    href: "/shop/categories",
    title: "Categories",
    active: false,
  },
  {
    id: crypto.randomUUID(),
    icon: <FaSearch size={26} />,
    href: "/shop/search",
    title: "Search",
    active: false,
  },
  {
    id: crypto.randomUUID(),
    icon: <HiMiniShoppingCart size={26} />,
    href: "/shop/cart",
    title: "Cart",
    active: false,
  },
];

export const categories = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Clothes",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    category: "Electronics",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673747885154-a42474df3cee?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGFuZCUyMGJldmVyYWdlfGVufDB8fDB8fHww",
    category: "Food & Beverages",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    category: "Books",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609467334293-030ac6448fd8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMHdhcmV8ZW58MHx8MHx8fDA%3D",
    category: "Home & Kitchen",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607774000480-de3f239fdd4c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D",
    category: "Beauty & Personal Care",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1668767725891-58f5cd788105?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjB3YXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Sports & Outdoors",
  },
];

export const categoryConfig = {
  clothes: [
    { title: "Shoes", icon: <GiSonicShoes /> },
    { title: "Shirts", icon: <IoShirtSharp /> },
    { title: "Hoodie", icon: <GiHoodie /> },
    { title: "Shorts", icon: <GiShorts /> },
    { title: "Ankara", icon: <GiAfrica /> },
  ],
  electronics: [
    { title: "Laptops", icon: <FaLaptop /> },
    { title: "Mobiles", icon: <FaMobileAlt /> },
    { title: "Cameras", icon: <FaCamera /> },
    { title: "Accessories", icon: <FaBlender /> },
    { title: "Audio", icon: <IoWaterSharp /> },
  ],
  books: [
    { title: "Fiction", icon: <IoBookSharp /> },
    { title: "Non-", icon: <IoBookSharp /> },
    { title: "Comics", icon: <IoBookSharp /> },
    { title: "Educational", icon: <IoBookSharp /> },
    { title: "Children", icon: <IoBookSharp /> },
  ],
  food: [
    { title: "Fast", icon: <IoFastFoodSharp /> },
    { title: "Beverages", icon: <IoWaterSharp /> },
    { title: "Snacks", icon: <IoFastFoodSharp /> },
    { title: "Fruits", icon: <IoFastFoodSharp /> },
    { title: "Vegetables", icon: <IoFastFoodSharp /> },
  ],
  kitchen: [
    { title: "Appliances", icon: <FaBlender /> },
    { title: "Cookware", icon: <GiKitchenKnives /> },
    { title: "Tableware", icon: <FaShower /> },
    { title: "Utensils", icon: <GiKitchenKnives /> },
    { title: "Storage", icon: <FaBlender /> },
  ],
  beauty: [
    { title: "Makeup", icon: <FaCut /> },
    { title: "Skincare", icon: <FaShower /> },
    { title: "Haircare", icon: <FaCut /> },
    { title: "Fragrances", icon: <FaCut /> },
    { title: "Tools", icon: <FaCut /> },
  ],
  sports: [
    { title: "Fitness", icon: <IoFitnessSharp /> },
    { title: "Cycling", icon: <FaBiking /> },
    { title: "Swimming", icon: <FaSwimmer /> },
    { title: "Basketball", icon: <IoBasketballOutline /> },
    { title: "Weightlifting", icon: <GiWeightLiftingUp /> },
  ],
};

export const sellerDetails = [
  {
    id: preGeneratedUUIDs[0],
    logo: "",
    title: "Thrifts by Omil ☺",
    description: `Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.`,
    category: "clothes",
    themeColor: "bg-[#FF5733]", 
  },
  {
    id: preGeneratedUUIDs[1],
    logo: "",
    title: "Gadget Haven",
    description: `Your one-stop shop for the latest in tech. From smartphones to laptops, we offer cutting-edge electronics with unbeatable prices. Enjoy fast shipping and top-notch customer service.`,
    category: "electronics",
    themeColor: "bg-[#4285F4]", 
  },
  {
    id: preGeneratedUUIDs[2],
    logo: "",
    title: "Book Nook",
    description: `Dive into the world of books with Book Nook. Whether you’re looking for bestsellers, classics, or academic textbooks, we’ve got you covered. Free shipping on orders over $50.`,
    category: "books",
    themeColor: "bg-[#34A853]", 
  },
  {
    id: preGeneratedUUIDs[3],
    logo: "",
    title: "Gourmet Delights",
    description: `From farm to table, Gourmet Delights offers fresh and delicious food products. Discover a wide range of organic and gourmet foods. Enjoy the taste of quality with every bite.`,
    category: "food",
    themeColor: "bg-[#FABB05]", 
  },
  {
    id: preGeneratedUUIDs[4],
    logo: "",
    title: "Kitchen Essentials",
    description: `Upgrade your kitchen with our high-quality cookware and appliances. From chef knives to blenders, Kitchen Essentials provides everything you need to cook like a pro.`,
    category: "kitchen",
    themeColor: "bg-[#F4511E]", 
  },
  {
    id: preGeneratedUUIDs[5],
    logo: "",
    title: "Beauty Bliss",
    description: `Enhance your beauty with our premium skincare and makeup products. Beauty Bliss offers a curated selection of the finest beauty products to help you look and feel your best.`,
    category: "beauty",
    themeColor: "bg-[#E91E63]", 
  },
  {
    id: preGeneratedUUIDs[6],
    logo: "",
    title: "Sporty Goods",
    description: `Gear up for your next adventure with Sporty Goods. Find high-quality sports equipment and apparel for all your favorite activities. From running shoes to yoga mats, we’ve got it all.`,
    category: "sports",
    themeColor: "bg-[#1E88E5]", 
  },
];

