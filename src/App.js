import React, { lazy, StrictMode, Suspense, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

// lazy loading code
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prince(context)",
    email: "@gmail.com",
  });
  return (
    <React.Fragment>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
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
        </UserContext.Provider>
      </Provider>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </StrictMode>
);
