// making controlled/collapsable accordion and using lifting the state up functionality in react

import { useState, useRef } from "react";
import { sectionsData } from "../Config";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Section = ({
  heading,
  description,
  visibleSection,
  setVisibleSection,
}) => {
  const contentRef = useRef(null);
  return (
    <div className="p-3">
      <h2 className="font-bold text-lg">{heading}</h2>

      {/* adding transition */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: visibleSection
            ? `${contentRef.current?.scrollHeight + 5}px`
            : "0px",
          opacity: visibleSection ? 1 : 0,
        }}
      >
        <p className="text-md border-2" ref={contentRef}>
          {description}
        </p>
      </div>

      <button
        className="border-2 px-3 cursor-pointer mt-2 bg-amber-200"
        onClick={setVisibleSection}
      >
        {visibleSection ? "Hide" : "Show"}
      </button>

    </div>
  );
};

const Cart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const cartItems = useSelector(store => store.cart.items) // subscribing to the specific portion of store here (inside store => inside Cart slice => inside item array  *Major performance improvement 
  //! const cartItems = useSelector(store => store) 
  // don't do like this, it means subscribing to the whole store, which will lead to performance issues because every time is there any changes in the store it will re render the Cart component

  const dispatch = useDispatch()

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <>
      {sectionsData.map((section) => {
        return (
          <Section
            heading={section.heading}
            key={section.id}
            description={section.description}
            visibleSection={visibleSection === section.id}
            setVisibleSection={() =>
              setVisibleSection(
                visibleSection === section.id ? null : section.id
              )
            }
          />
        );
      })}
      <div className="flex">
        <h2 className="text-3xl font-bold">CartItems - {cartItems.length}</h2>
        <button className="text-amber-600 bg-white border-2 px-3 m-2 cursor-pointer" onClick={()=>handleClearCart()}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
