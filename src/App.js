import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClassComp from "./components/ProfileClass";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route index element={<Body />} />
        <Route path="about" element={<About />}>
          <Route path="profile" element={<ProfileClassComp name="sending props"/>}/> 
          {/* localhost:1234/about/profile */}
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />}/>
        <Route path="restaurant/:id" element={<RestaurantMenu/>}/>
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
