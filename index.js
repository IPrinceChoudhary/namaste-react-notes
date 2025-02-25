import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = (
  <h3 id="title3" key="h3">
    Heading3
  </h3>
); // this is react element returning object with jsx inside written it

// React component

// Everything is a component in react 

// there are 2 ways we can create components
// functional based component and class based component

// *Functional based component is just a normal js function
// *which returns some piece of jsx or react element or a component 

const HeaderComponent2 = () =>{
  return (
  <h1>React functional component with function declaration</h1>
  )
}

const HeaderComponent = ()=>{ // *Name of component always should be start with Capital letter - convention
  return ( // we can avoid return statement as well. this is part of arrow functions
    <div>
      {heading3}
      {/* <HeaderComponent2/> */}
      {/* or  */}
      {HeaderComponent2()}
      <h1>React functional component with arrow function</h1>
    </div>
  )
}; // this is a react function component returning function with jsx written inside

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
