import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClassComp from "./components/ProfileClass";

// lazy loading code
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route index element={<Body />} />
        <Route path="about" element={<About />}>
          <Route
            path="profile"
            element={<ProfileClassComp name="sending props" />}
          />
          {/* localhost:1234/about/profile */}
        </Route>
        <Route path="contact" element={<Contact />} />
        {/* fallback will show whatever we want to show between the time of cart file to load */}
        <Route
          path="cart"
          element={
            <Suspense fallback={<h2>Loading.....</h2>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="restaurant/:id" element={<RestaurantMenu />} />
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
