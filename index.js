import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", style: { backgroundColor: "red" }, key: "h1" },
  "Heading1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title2", key: "h2" },
  "Heading2"
);
// React.createElement ==> object ==> rendered in html DOM with the help of ReactDOM package

const heading3 = (
  <h3 id="title3" key="h3">
    Heading3
  </h3>
); // jsx
// jsx is not html inside js, its a html like syntax
// jsx ==> React.createElement ==> object ==> html DOM
// jsx is converted into React.createElement by Babel

const container = React.createElement("div", { id: "box" }, [
  heading1,
  heading2,
  heading3,
]);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
