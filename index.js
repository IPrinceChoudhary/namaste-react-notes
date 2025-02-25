import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * - logo
 * - nav items
 * - cart
 *
 * hero
 * - search bar
 * - restaurant list
 * - - Restaurant card
 * - - - Image
 * - - - Name
 * - - - Rating
 * - - - Cuisines
 *
 * footer
 * - links
 * - copyright
 */

// inline styling 
const styleObj = {
  backgroundColor: "red",
}

const Heading3 = () => (
  <a href="/">
    <h1 id="title3" key="h1">
      Foody
    </h1>
  </a>
);

const Header = () => {
  return (
    <div style={styleObj} className="header">
      <Heading3 />
      <div className="nav-items">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Cart</a></li>
        </ul>
      </div>
    </div>
  );
};

const Body = ()=>{
  return(
    <p>body</p>
  )
}

const Footer = ()=>{
  return(
    <p>body</p>
  )
}

const AppLayout = ()=>{
  return (
    <React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
