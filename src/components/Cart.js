// making controlled/collapsable accordion and using lifting the state up functionality in react

import { useState, useRef } from "react";
import { sectionsData } from "../Config";

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
    </>
  );
};

export default Cart;
