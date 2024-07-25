import { FaSearch, FaUser } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";
import { HiMiniShoppingCart } from "react-icons/hi2";


export const bottomNavItems = [
    {
        id: crypto.randomUUID(),
        icon: <RiShoppingBag2Fill size={26} fill="white"/>,
        href: "/shop",
        title: "Shop",
        active:true
    },
    {
        id: crypto.randomUUID(),
        icon: <TbCategoryFilled size={26} />,
        href: "/shop/categories",
        title: "Categories",
        active:false

    },
    {
        id: crypto.randomUUID(),
        icon: <FaSearch size={26}/>,
        href: "/search",
        title: "Search",
        active:false

    },
    {
        id: crypto.randomUUID(),
        icon: <HiMiniShoppingCart size={26} />,
        href: "/shop/cart",
        title: "Cart",
        active:false

    },
    {
        id: crypto.randomUUID(),
        icon: <FaUser size={26} />,
        href: "/shop/profile",
        title: "Profile",
        active:false

    }
];

export const categories = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Clothes',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D',
      category: 'Electronics',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1673747885154-a42474df3cee?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGFuZCUyMGJldmVyYWdlfGVufDB8fDB8fHww',
      category: 'Food & Beverages',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
      category: 'Books',
    },
    {
      image: 'https://images.unsplash.com/photo-1609467334293-030ac6448fd8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMHdhcmV8ZW58MHx8MHx8fDA%3D',
      category: 'Home & Kitchen',
    },
    {
      image: 'https://images.unsplash.com/photo-1607774000480-de3f239fdd4c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D',
      category: 'Beauty & Personal Care',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1668767725891-58f5cd788105?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjB3YXJlc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Sports & Outdoors',
    },
  ];