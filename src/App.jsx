import React, { useState } from "react";
import Navbar from "./Pages/Navbar/Index";
import '../src/Pages/Navbar/navbar.css'
import "./App.css";
import CardContext from "./CardContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Login from "./Pages/Login/Index";
import Signup from "./Pages/Signup/Index";
const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      product: "Sugat",
      brand: "Betsin Maalat",
      quantity: 1,
      isSelected: false,
      price: 56.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a",
    },
    {
      id: 2,
      product: "Kulangot Manok",
      brand: "Salt",
      price: 67.0,
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    },
    {
      id: 3,
      product: "Very Nice",
      brand: "Sslt maalat",
      isSelected: false,
      price: 79.0,
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    },
    {
      id: 4,
      product: "Tiktilaok Manok",
      brand: "Sexbomb",
      price: 78.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    },
    {
      id: 5,
      product: "Very Nice",
      brand: "Salt maalat",
      price: 79.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    },
    {
      id: 6,
      product: "Quake Overload",
      brand: "Yezyow",
      quantity: 1,
      price: 80.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
    },
    {
      id: 7,
      product: "Very Nice",
      brand: "Salt maalat",
      quantity: 1,
      price: 79.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3",
    },
    {
      id: 8,
      product: "Kutu",
      brand: "Sexbomb",
      quantity: 1,
      price: 129.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
    },
    {
      id: 9,
      product: "Tuluk",
      brand: "Black Kibal",
      price: 142.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
    },
    {
      id: 10,
      product: "Takla Green",
      brand: "Sexbomb",
      price: 150.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e",
    },
    {
      id: 11,
      product: "Balakubak",
      brand: "Betsin Maalat",
      quantity: 1,
      price: 170.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e",
    },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item, price, product, image, isSelected) => {
    const isItemInCart = cartItems.find((cartItem, i) => cartItem.id === item); // check if the item is already in the cart
    // console.log(isItemInCart);
    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (
            cartItem,
            i // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.id === item
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                  price: cartItem.price + price,
                }
              : cartItem // otherwise, return the cart item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1,
          price: price,
          product: product,
          image: image,
          id: item,
          isSelected: isSelected,
        },
      ]); // if the item is not in the cart, add the item to the cart
    }
  };
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem, i) => cartItem.id === item);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem, i) => cartItem.id  !== item));
    } else {
      setCartItems(
        cartItems.map((cartItem, i) =>
          cartItem.id  === item
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const products = [
    {
      id: 1,
      product: "Sugat",
      brand: "Betsin Maalat",
      quantity: 1,
      isSelected: false,
      price: 56.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a",
    },
    {
      id: 2,
      product: "Kulangot Manok",
      brand: "Salt",
      price: 67.0,
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    },
    {
      id: 3,
      product: "Very Nice",
      brand: "Sslt maalat",
      isSelected: false,
      price: 79.0,
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    },
    {
      id: 4,
      product: "Tiktilaok Manok",
      brand: "Sexbomb",
      price: 78.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    },
    {
      id: 5,
      product: "Very Nice",
      brand: "Salt maalat",
      price: 79.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    },
    {
      id: 6,
      product: "Quake Overload",
      brand: "Yezyow",
      quantity: 1,
      price: 80.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
    },
    {
      id: 7,
      product: "Very Nice",
      brand: "Salt maalat",
      quantity: 1,
      price: 79.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3",
    },
    {
      id: 8,
      product: "Kutu",
      brand: "Sexbomb",
      quantity: 1,
      price: 129.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
    },
    {
      id: 9,
      product: "Tuluk",
      brand: "Black Kibal",
      price: 142.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
    },
    {
      id: 10,
      product: "Takla Green",
      brand: "Sexbomb",
      price: 150.0,
      quantity: 1,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e",
    },
    {
      id: 11,
      product: "Balakubak",
      brand: "Betsin Maalat",
      quantity: 1,
      price: 170.0,
      isSelected: false,
      image:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e",
    },
  ];
  const handleClick = (id, check) => {
    const arr = [...data];
    const result = arr.find((it, i) => it.id === id);
    result.isSelected = check;
    setData(arr);
    localStorage.setItem("users", JSON.stringify(arr));
  };
  const handleSearch = (text) => {
    if (text === "") {
      setData(products);
      return;
    }
    const filterBySearch = products.filter((item) => {
      if (item.product.toLowerCase().includes(text.toLowerCase())) {
        return item;
      }
    });
    setData(filterBySearch);
  };
  return (
    <CardContext.Provider
      value={{
        handleClick,
        data,
        handleSearch,
        addToCart,
        cartItems,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      <div id="app">
        <BrowserRouter>
          <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

        </Routes>
        </BrowserRouter>
      
      </div>
    </CardContext.Provider>
  );
};

export default App;
